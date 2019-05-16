import React, { Fragment } from 'react';

import CodeBlock from '../../components/CodeBlock';
import Preview from '../../components/Preview';

const Contentareas = () => {
  // TODO: Move endpoints (API calls) to file as constant and import where needed (easier to maintain)
  const url = `https://ephtracking.cdc.gov/apigateway/api/v1/contentareas/json`;
  return (
    <Fragment>
      <h1 className="title">Retrieving List of all Content Areas</h1>
      <h5 className="title is-5">Usage</h5>
      <CodeBlock>
        https://ephtracking.cdc.gov/apigateway/api/{'{'}version{'}'}/contentareas/{'{'}getChildMeasure{'}'}/{'{'}getMultiMeasure{'}'}/{'{'}returnType{'}'}[?apiToken]
      </CodeBlock>
      <hr />
      <Preview url={url} />
    </Fragment>
  );
};

export default Contentareas;
