/* eslint-disable react/prop-types */

import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

// components
import Error from "./Error";

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <Error onRetry={resetErrorBoundary} text={error.message} />
);

export default function Handler({ children, onRetry }) {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback} onReset={onRetry}>
      {children}
    </ReactErrorBoundary>
  );
}
