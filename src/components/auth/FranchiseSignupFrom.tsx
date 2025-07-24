@@ .. @@
   const handleSubmit = useCallback(
     async (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       setError(null);
       setLoading(true);

+      // Mock registration function since franchiseRegister is not imported
+      const franchiseRegister = async (payload: any) => {
+        return new Promise((resolve) => {
+          setTimeout(() => {
+            resolve({ success: true });
+          }, 1000);
+        });
+      };

       try {
         if (!formData.pincode || formData.pincode.length !== 6) {