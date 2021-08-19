import React, { FC } from 'react';
import { history } from 'umi';
import { IBestAFSRoute } from '@umijs/plugin-layout';
import { KeepAlive } from '@@/core/umiExports';
import PanelTabs from '@/components/PanelTabs';

const PanelTabsWrapper: FC<{ route: IBestAFSRoute; children: React.ReactNode }> = ({
  route,
  children,
}) => {
  return (
    <>
      <PanelTabs />
      <KeepAlive name={route.name} location={history.location} saveScrollPosition="screen">
        <div style={{ marginTop: 50 }}>{children}</div>
      </KeepAlive>
    </>
  );
};

export default PanelTabsWrapper;
