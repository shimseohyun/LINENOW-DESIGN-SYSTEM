const fs = require("fs");
const path = require("path");

function main() {
  const packageJsonPath = path.join(__dirname, "package.json");

  // package.json 파일 읽기
  const source = fs.readFileSync(packageJsonPath, "utf-8");
  const sourceObj = JSON.parse(source);

  // scripts와 devDependencies 초기화
  sourceObj.scripts = {};
  sourceObj.devDependencies = {};

  // sourceObj.main이 존재하고 문자열인지 확인
  if (sourceObj.main && typeof sourceObj.main === "string") {
    if (sourceObj.main.startsWith("/dist")) {
      sourceObj.main = sourceObj.main.slice(5); // "/dist" 제거
    }
  } else {
    console.warn(
      "sourceObj.main is undefined or not a string. Setting it to 'index.js'"
    );
    sourceObj.main = "index.js"; // 기본값 설정
  }

  // 새로운 package.json 파일 저장
  fs.writeFileSync(
    path.join(__dirname, "dist", "package.json"),
    Buffer.from(JSON.stringify(sourceObj, null, 2), "utf-8")
  );

  // version.txt 파일 저장
  fs.writeFileSync(
    path.join(__dirname, "dist", "version.txt"),
    Buffer.from(sourceObj.version || "0.0.0", "utf-8") // 기본값 설정
  );

  fs.copyFileSync(__dirname + "/.npmignore", __dirname + "/dist/.npmignore");
}

main();
