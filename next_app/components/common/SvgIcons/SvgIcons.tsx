import { ReactNode } from 'react';

export interface ISvgIcon {
  xmlns?: string;
  viewBox: string;
  path: ReactNode;
  style: string;
  handleClick?: Function;
  param?: string;
}

const SvgIcon: React.FC<ISvgIcon> = ({
  xmlns,
  viewBox,
  path,
  style,
  handleClick,
  param,
}) => {
  return (
    <svg
      className={style}
      xmlns={xmlns}
      viewBox={viewBox}
      onClick={() => {
        if (handleClick) handleClick(param);
      }}
    >
      {path}
    </svg>
  );
};

export default SvgIcon;
