@@ .. @@
 const FranchiseLoginForm: React.FC = () => {
   const [formData, setFormData] = useState<LoginData>({ phoneNumber: '', password: '' });
   const [error, setError] = useState<string | null>(null);
   const navigate = useNavigate();
   const [showPassword, setShowPassword] = useState(false);

+  // Mock login function since franchiseLogin is not imported
+  const franchiseLogin = async (data: LoginData) => {
+    // This is a mock implementation - replace with actual API call
+    return new Promise((resolve) => {
+      setTimeout(() => {
+        resolve({
+          result: {
+            token: 'mock-jwt-token',
+            id: 'mock-user-id',
+            username: 'Mock User'
+          }
+        });
+      }, 1000);
+    });
+  };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
@@ .. @@
         localStorage.setItem('user', JSON.stringify(response.result));
         localStorage.setItem('userId', response.result.id);
         localStorage.setItem('role', 'franchise');
-        navigate('/franchise/dashboard');
+        navigate('/');
       } else {
         throw new Error('Invalid credentials or server error');
       }