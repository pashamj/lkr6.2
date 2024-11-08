import logo from './logo.svg';
import './App.css';
import * as React from "react";
import { Link, Routes, Route } from "react-router-dom";

const MainPage = () => <div>Content of main page</div>;
const Catalog = () => <div>Content of catalog</div>;
const Contacts = () => <div>Content of contacts</div>;

function App() {
    return (
        <div>
            <div>
                <h3>Меню</h3>
                <ul>
                    <li><Link to="/">Главная страница</Link></li>
                    <li><Link to="/catalog">Каталог</Link></li>
                    <li><Link to="/contacts">Контакты</Link></li>
                </ul>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
