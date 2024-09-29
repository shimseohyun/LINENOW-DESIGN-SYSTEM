export interface IconProps {
  name: string;
  size: string;
}

const Icon = ({ size, name }: IconProps) => {
  return (
    <img
      src={`/src/assets/icons/${name}.svg`}
      style={{ width: size, height: size }}
    />
  );
};
export default Icon;
