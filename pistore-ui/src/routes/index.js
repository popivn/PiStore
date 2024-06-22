import Home from '@/pages/Home';
import BrowsePage from 'pages/Browse';
import AuthLogin from '@/pages/AuthLogin';
import AuthSignUp from '@/pages/AuthSignUp';
import PersonalView from '@/pages/PersonalView';
import GameDetailPage from 'pages/GameDetail';
import { AuthLayout, DefaultLayout, ProfileLayout, DetailLayout, AdminLayout } from 'components/Layout';
import MyCart from '@/pages/MyCart';
import ContactUsPage from '@/pages/ContactUS';
import AdminPage from 'pages/AdminPage';
import AdminAddGamePage from 'pages/AdminAddGame';
import AdminModifyPage from 'pages/AdminModifyPage';
import ModifyDetailsPage from 'pages/ModifyDetails';
//public Route
const publicRouter = [
    { path: '/', component: Home, Layout: DefaultLayout },
    { path: '/browse', component: BrowsePage, Layout: DefaultLayout },
    { path: '/login', component: AuthLogin, Layout: AuthLayout },
    { path: '/signup', component: AuthSignUp, Layout: AuthLayout },
    { path: '/profile', component: PersonalView, Layout: ProfileLayout },
    { path: '/detail', component: GameDetailPage, Layout: DetailLayout },
    { path: '/mycart', component: MyCart, Layout: DefaultLayout },
    { path: '/contactus', component: ContactUsPage, Layout: AuthLayout },
    { path: '/admin', component: AdminPage, Layout: AdminLayout },
    { path: '/admin/addgame', component: AdminAddGamePage, Layout: AdminLayout },
    { path: '/admin/modify', component: AdminModifyPage, Layout: AdminLayout },
    { path: '/admin/modify/detail', component: ModifyDetailsPage, Layout: AdminLayout },
];
const privateRouter = [];
export { publicRouter, privateRouter };
