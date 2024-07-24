import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileUpdateScreen from "./screens/ProfileUpdateScreen";
import DashboardScreen from "./screens/DashboardScreen";
import CreatePostScreen from "./screens/CreatePostScreen";
import PostReviewScreen from "./screens/PostReviewScreen";
import CreateReview from "./components/CreateReview";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/profile" element={<ProfileUpdateScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/dashboard" element={<DashboardScreen />} />
              <Route path="/creatPost" element={<CreatePostScreen />} />
              <Route path="/post/review/:slug" element={<PostReviewScreen/>} />
              <Route path="/create/review/:slug" element={<CreateReview/>} />
            </Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
