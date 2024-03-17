import { AppContextProvider, useAppContextProvider } from "@aws-copy/context-hooks/app-context";
import { Menu, MenuItem } from "@aws-copy/core";

const Content = () => {
  const [context] = useAppContextProvider()

  return (
      <div className="w-full flex justify-center items-center bg-slate-500 p-2" style={{ borderRadius: 8 }}>
        {context?.routerElement}
      </div>
    )
}

const App = () => {
  return (
    <AppContextProvider>
      <div className="flex flex-row justify-between p-4 h-screen gap-4">
        <Menu>
          <MenuItem element={<>Hello world 1!</>} label="Dashboard 1" resource="/1" />
          <MenuItem element={<>Hello world 2!</>} label="Dashboard 2" resource="/2" />
          <MenuItem element={<>Hello world 3!</>} label="Dashboard 3" resource="/3" />
        </Menu>
        <Content />
      </div>
    </AppContextProvider>
  );
}

export default App;
