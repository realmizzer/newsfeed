import { Grid } from 'antd';

const { useBreakpoint } = Grid;

export const useNewsGrid = () => {
  const screens = useBreakpoint();

  const getColumnsCount = () => {
    if (screens.xxl) return 4;
    if (screens.xl) return 3;
    if (screens.lg) return 3;
    if (screens.md) return 2;
    if (screens.sm) return 2;
    return 1;
  };

  const columnsCount = getColumnsCount();
  const pageLimit = columnsCount * 3;

  return {
    pageLimit: pageLimit,
    columns: columnsCount,
  };
};
