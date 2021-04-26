import React from "react";
import { Route, RouteProps } from "react-router-dom";
import PageContainer from "components/layout/PageContainer";

const PublicRoute: React.FC<Partial<RouteProps> & { component: any }> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <PageContainer>
          <Component {...props} />
        </PageContainer>
      )}
    />
  );
};

export default PublicRoute;
