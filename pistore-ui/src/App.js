import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouter } from '@/routes';
import { DefaultLayout } from '@/components/Layout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRouter.map((route, index) => {
                        const Page = route.component;
                        const Layout = route.Layout; // || DefaultLayout;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
