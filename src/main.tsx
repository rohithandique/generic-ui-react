import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { withProviders } from './app/providers';

const rootElement = document.getElementById('root')!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  const App = withProviders(() => null);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
