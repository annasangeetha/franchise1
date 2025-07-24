@@ .. @@
 import { data, Navigate, Route, Routes } from 'react-router-dom';
 import FranchiseSignup from '../pages/FranchiseSignupPage';
 import FranchiseLogin from '../pages/FranchiseLoginPage';
+import CategoriesPage from '../pages/CategoriesPage';
+import AboutUsPage from '../pages/AboutUsPage';
+import SubscriptionPage from '../pages/SubscriptionPage';
+import KeyFeaturesPage from '../pages/KeyFeaturesPage';
+import FranchisePage from '../pages/FranchisePage';
 import AuthLayout from '../components/layout/AuthLayout';
 import NotFound from '../pages/NotFoundPage';
 import Homepage from '../pages/Homepage';
@@ .. @@
 const AppRoutes = () => {
     return (
         <Routes>
+            {/* Public routes */}
+            <Route path="/categories" element={<CategoriesPage />} />
+            <Route path="/about" element={<AboutUsPage />} />
+            <Route path="/subscription" element={<SubscriptionPage />} />
+            <Route path="/features" element={<KeyFeaturesPage />} />
+            <Route path="/franchise" element={<FranchisePage />} />
+            
             <Route element={<AuthLayout />}>
                 <Route path="/login/franchise" element={<FranchiseLogin />} />
                 <Route path="/signup/franchise" element={<FranchiseSignup />} />
@@ .. @@
                 <Route path="/refer" element={<Refer />} />
             </Route>

-
-            
             <Route path="*" element={<NotFound />} />
         </Routes>
     );
 }