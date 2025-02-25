

// const user = JSON.parse(localStorage.getItem('userInfo')) || {}; 
// console.log("User Name:", user?.user_name || "Guest");
// console.log("Is Admin:", user?.is_admin ? true: false);

// const menuItems = {
//   items: [
//     {
//       id: 'navigation',
//       title: 'Dashboard',
//       type: 'group',
//       icon: 'icon-navigation',
//       children: [
//         {
//           id: 'dashboard',
//           title: 'Dashboard',
//           type: 'item',
//           icon: 'feather icon-home',
//           url: '/app/dashboard/default'
//         }
//       ]
//     },
//     {
//       id: 'ui-element',
//       title: 'Configuration Module',
//       type: 'group',
//       icon: 'icon-ui',
//       children: [
//         {
//           id: 'component',
//           title: 'CONFIGURATIONS',
//           type: 'collapse',
//           icon: 'feather icon-box',
//           children: [
//             {
//               id: 'button',
//               title: 'Company Details',
//               type: 'item',
//               url: '/basic/Companydetails'
//             },
//             {
//               id: 'badges',
//               title: 'Category Details',
//               type: 'item',
//               url: '/basic/catagorymaster'
//             },
//             {
//               id: 'collapse',
//               title: 'Party Details',
//               type: 'item',
//               url: '/basic/partydetails'
//             },
//             {
//               id: 'tabs-pills',
//               title: 'Tax Details',
//               type: 'item',
//               url: '/basic/taxdetails'
//             },
//             {
//               id: 'typography',
//               title: 'Financial Year Details',
//               type: 'item',
//               url: '/basic/financialyeardetails'
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id: 'ui-forms',
//       title: 'USER ACCESS CONTROL',
//       type: 'group',
//       icon: 'feather icon-user',
//       children: [
//         {
//           id: 'typography',
//           title: 'User Master',
//           type: 'item',
//           icon: 'feather icon-user',
//           url: '/basic/userdetails'
//         }
//       ]
//     },
//     {
//       id: 'ui-forms',
//       title: 'STOCK , BARCODING & PURCHASE DETAILS',
//       type: 'group',
//       icon: 'icon-group',
//       children: [
//         {
//           id: 'forms',
//           title: 'Purchase Details',
//           type: 'item',
//           icon: 'feather icon-file-text',
//           url: '/basic/purchasemaster'
//         },
//         {
//           id: 'table',
//           title: 'Barcoding',
//           type: 'item',
//           icon: 'feather icon-server',
//           url: '/basic/barcodedetails'
//         },
//         {
//           id: 'breadcrumb',
//           title: 'Stock Entry',
//           type: 'item',
//           icon: 'feather icon-file-text',
//           url: '/basic/itemmaster'
//         }
//       ]
//     },
//     {
//       id: 'sales',
//       title: 'Sales and Sales Return Module',
//       type: 'group',
//       icon: 'icon-ui',
//       children: [
//         {
//           id: 'sales',
//           title: 'SALES',
//           type: 'collapse',
//           icon: 'feather icon-box',
//           children: [
//             {
//               id: 'button',
//               title: 'Sales',
//               type: 'item',
//               url: '/forms/Retailsales'
//             },
//             {
//               id: 'breadcrumb',
//               title: 'Sale Returns',
//               type: 'item',
//               url: '/sale/bulksalereturn'
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id: 'reports',
//       title: 'REPORT SECTION',
//       type: 'group',
//       icon: 'icon-ui',
//       children: [
//         {
//           id: 'reports',
//           title: 'REPORTS',
//           type: 'collapse',
//           icon: 'feather icon-box',
//           children: [
//             {
//               id: 'button',
//               title: 'Sales Report',
//               type: 'item',
//               url: '/reports/salesreports'
//             },
//             {
//               id: 'badges',
//               title: 'Saletax Report',
//               type: 'item',
//               url: '/reports/salestaxreports'
//             },
//             {
//               id: 'badges',
//               title: 'Stock Report',
//               type: 'item',
//               url: '/reports/stockreport'
//             },
//             {
//               id: 'breadcrumb',
//               title: 'Discount Report',
//               type: 'item',
//               url: '/reports/discountreport'
//             },
//             {
//               id: 'collapse',
//               title: 'Customer Report',
//               type: 'item',
//               url: '/reports/customerreport'
//             },
//             {
//               id: 'typography',
//               title: 'Purchase Report',
//               type: 'item',
//               url: '/reports/purchasereport'
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id: 'sales',
//       title: 'Printer Settings & Module Access',
//       type: 'group',
//       icon: 'icon-ui',
//       children: [
//         {
//           id: 'sales',
//           title: 'Printer Setting & Modules Access',
//           type: 'collapse',
//           icon: 'feather icon-box',
//           children: [
//             {
//               id: 'button',
//               title: 'Printer Settings',
//               type: 'item',
//               url: '/setting/printer'
//             },
//             {
//               id: 'breadcrumb',
//               title: 'Module Access',
//               type: 'item',
//               url: '/setting/module'
//             }
//           ]
//         }
//       ]
//     }
//   ]
// };

// export default menuItems;










// import api from "./api";

// // Function to get stored user info
// const getStoredUser = () => JSON.parse(localStorage.getItem("userInfo")) || {};

// // Function to fetch user data if not already available
// const fetchUserData = async (userName) => {
//   // Skip fetching for Guest user
//   if (userName === "Guest") {
//     console.warn("Guest user detected, no role-based data fetched.");
//     return; // Skip fetching for Guest
//   }

//   try {
//     const response = await api.get(`api/userrole/role-based-user/${userName}/`);
//     if (response.data.success && response.data.data) {
//       // Save the fetched data to localStorage
//       localStorage.setItem("userInfo", JSON.stringify(response.data.data));
//       // Trigger user data update
//       window.dispatchEvent(new Event("userInfoUpdated"));
//     }
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//   }
// };

// // Initial user data retrieval
// let storedUser = getStoredUser();
// let userName = storedUser?.user_name || "Guest";

// // ✅ Debug: Print in console to verify
// console.log("Stored User:", storedUser);
// console.log("User Name:", userName);

// // Fetch role-based menu items if they are not available in localStorage
// if (!storedUser || !storedUser.modules) {
//   fetchUserData(userName); // Fetch data on page load if needed
// }

// // Listen for updates (Triggered after login or after fetching user data)
// window.addEventListener("userInfoUpdated", () => {
//   storedUser = getStoredUser();
//   userName = storedUser?.user_name || "Guest";
//   console.log("Updated Stored User:", storedUser);
//   console.log("Updated User Name:", userName);
//   // Trigger re-render or menu update here after user info is updated
// });

// // Extract user role and allowed modules
// const isAdmin = storedUser?.is_admin || false;
// const allowedModules = storedUser?.modules?.map((mod) => mod.name) || [];

// // Function to filter menu items based on allowed modules
// const filterMenuItems = (menu) => {
//   if (!menu) return [];

//   return menu
//     .map((item) => {
//       if (item.children) {
//         const filteredChildren = item.children
//           .map((child) => {
//             if (child.children) {
//               const filteredSubChildren = child.children.filter(
//                 (sub) => isAdmin || allowedModules.includes(sub.title)
//               );
//               return filteredSubChildren.length > 0 ? { ...child, children: filteredSubChildren } : null;
//             }
//             return isAdmin || allowedModules.includes(child.title) ? child : null;
//           })
//           .filter(Boolean);

//         return filteredChildren.length > 0 ? { ...item, children: filteredChildren } : null;
//       }
//       return isAdmin || allowedModules.includes(item.title) ? item : null;
//     })
//     .filter(Boolean);
// };

// // Full menu structure
// const fullMenu = {
//   items: [
//     {
//       id: "navigation",
//       title: "Dashboard",
//       type: "group",
//       icon: "icon-navigation",
//       children: [
//         { id: "dashboard", title: "Dashboard", type: "item", icon: "feather icon-home", url: "/app/dashboard/default" },
//       ],
//     },
//     {
//       id: "ui-element",
//       title: "Configuration Module",
//       type: "group",
//       icon: "icon-ui",
//       children: [
//         {
//           id: "component",
//           title: "CONFIGURATIONS",
//           type: "collapse",
//           icon: "feather icon-box",
//           children: [
//             { id: "company", title: "Company Details", type: "item", url: "/basic/Companydetails" },
//             { id: "category", title: "Category Details", type: "item", url: "/basic/catagorymaster" },
//             { id: "party", title: "Party Details", type: "item", url: "/basic/partydetails" },
//             { id: "tax", title: "Tax Details", type: "item", url: "/basic/taxdetails" },
//             { id: "financial", title: "Financial Year Details", type: "item", url: "/basic/financialyeardetails" },
//           ],
//         },
//       ],
//     },
//     {
//       id: "ui-forms",
//       title: "USER ACCESS CONTROL",
//       type: "group",
//       icon: "feather icon-user",
//       children: [
//         {
//           id: "typography",
//           title: "User Master",
//           type: "item",
//           icon: "feather icon-user",
//           url: "/basic/userdetails",
//         },
//       ],
//     },
//     {
//       id: "ui-forms",
//       title: "STOCK , BARCODING & PURCHASE DETAILS",
//       type: "group",
//       icon: "icon-group",
//       children: [
//         { id: "forms", title: "Purchase Details", type: "item", icon: "feather icon-file-text", url: "/basic/purchasemaster" },
//         { id: "table", title: "Barcoding", type: "item", icon: "feather icon-server", url: "/basic/barcodedetails" },
//         { id: "breadcrumb", title: "Stock Entry", type: "item", icon: "feather icon-file-text", url: "/basic/itemmaster" },
//       ],
//     },
//     {
//       id: "sales",
//       title: "Sales and Sales Return Module",
//       type: "group",
//       icon: "icon-ui",
//       children: [
//         {
//           id: "sales",
//           title: "SALES",
//           type: "collapse",
//           icon: "feather icon-box",
//           children: [
//             { id: "button", title: "Sales", type: "item", url: "/forms/Retailsales" },
//             { id: "breadcrumb", title: "Sale Returns", type: "item", url: "/sale/bulksalereturn" },
//           ],
//         },
//       ],
//     },
//     {
//       id: "reports",
//       title: "REPORT SECTION",
//       type: "group",
//       icon: "icon-ui",
//       children: [
//         {
//           id: "reports",
//           title: "REPORTS",
//           type: "collapse",
//           icon: "feather icon-box",
//           children: [
//             { id: "button", title: "Sales Report", type: "item", url: "/reports/salesreports" },
//             { id: "badges", title: "Saletax Report", type: "item", url: "/reports/salestaxreports" },
//             { id: "badges", title: "Stock Report", type: "item", url: "/reports/stockreport" },
//             { id: "breadcrumb", title: "Discount Report", type: "item", url: "/reports/discountreport" },
//             { id: "collapse", title: "Customer Report", type: "item", url: "/reports/customerreport" },
//             { id: "typography", title: "Purchase Report", type: "item", url: "/reports/purchasereport" },
//           ],
//         },
//       ],
//     },
//   ],
// };

// // Filter menu based on user role
// const menuItems = {
//   items: filterMenuItems(fullMenu.items),
// };

// export default menuItems;



// import api from "./api";

// // ✅ Get stored user info
// const getStoredUser = () => JSON.parse(localStorage.getItem("userInfo")) || {};

// // ✅ Fetch user data and update localStorage
// const fetchUserData = async (userName) => {
//   if (userName === "Guest") {
//     console.warn("Guest user detected, no role-based data fetched.");
//     return;
//   }

//   try {
//     console.log("Fetching user data for:", userName);
//     const response = await api.get(`api/userrole/role-based-user/${userName}/`);

//     console.log("API Response:", response.data);

//     if (response.data.success && response.data.data) {
//       // ✅ Store user info
//       localStorage.setItem("userInfo", JSON.stringify(response.data.data));

//       // ✅ Always navigate to dashboard after login
//       localStorage.setItem("redirectAfterLogin", "/garmentproject/#/app/dashboard/default");

//       // Dispatch event to update UI
//       window.dispatchEvent(new Event("userInfoUpdated"));
//     }
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//   }
// };

// // ✅ Redirect user to Dashboard on page load (if logged in)
// window.addEventListener("load", () => {
//   const storedUser = getStoredUser();
//   const redirectPage = localStorage.getItem("redirectAfterLogin") || "/garmentproject/#/app/dashboard/default";

//   if (storedUser.user_name) {
//     console.log("Redirecting user to:", redirectPage);
//     window.location.href = redirectPage; // Always go to dashboard
//   }
// });

// // ✅ Listen for updates and refresh page
// window.addEventListener("userInfoUpdated", () => {
//   console.log("User info updated, reloading page...");
//   window.location.reload();
// });

// // ✅ Retrieve stored user info
// let storedUser = getStoredUser();
// let userName = storedUser?.user_name || "Guest";

// // ✅ Debug logs
// console.log("Stored User:", storedUser);
// console.log("User Name:", userName);

// // ✅ Fetch user data if not available
// if (!storedUser || !storedUser.modules) {
//   fetchUserData(userName);
// }

// // ✅ Extract user role and allowed modules
// const isAdmin = storedUser?.is_admin || false;
// const allowedModules = storedUser?.modules?.map((mod) => mod.name) || [];

// // ✅ Function to filter menu items based on allowed modules
// const filterMenuItems = (menu) => {
//   if (!menu) return [];

//   return menu
//     .map((item) => {
//       if (item.children) {
//         const filteredChildren = item.children
//           .map((child) => {
//             if (child.children) {
//               const filteredSubChildren = child.children.filter((sub) =>
//                 isAdmin || allowedModules.includes(sub.title) || checkSubModuleAccess(sub.title)
//               );
//               return filteredSubChildren.length > 0 ? { ...child, children: filteredSubChildren } : null;
//             }
//             return isAdmin || allowedModules.includes(child.title) ? child : null;
//           })
//           .filter(Boolean);

//         return filteredChildren.length > 0 ? { ...item, children: filteredChildren } : null;
//       }
//       return isAdmin || allowedModules.includes(item.title) ? item : null;
//     })
//     .filter(Boolean);
// };

// // ✅ Function to check if a sub_module is allowed
// const checkSubModuleAccess = (title) => {
//   return storedUser?.modules?.some((mod) => mod.sub_modules.some((sub) => sub.name === title));
// };


// // ✅ Full menu structure
// // Full menu structure
// const fullMenu = {
//   items: [
//     {
//       id: "navigation",
//       title: "Dashboard",
//       type: "group",
//       icon: "icon-navigation",
//       children: [
//         { id: "dashboard", title: "Dashboard", type: "item", icon: "feather icon-home", url: "/app/dashboard/default" },
//       ],
//     },
//     {
//       id: "ui-element",
//       title: "Configuration Module",
//       type: "group",
//       icon: "icon-ui",
//       children: [
//         {
//           id: "component",
//           title: "CONFIGURATIONS",
//           type: "collapse",
//           icon: "feather icon-box",
//           children: [
//             { id: "company", title: "Company Details", type: "item", url: "/basic/Companydetails" },
//             { id: "category", title: "Category Details", type: "item", url: "/basic/catagorymaster" },
//             { id: "party", title: "Party Details", type: "item", url: "/basic/partydetails" },
//             { id: "tax", title: "Tax Details", type: "item", url: "/basic/taxdetails" },
//             { id: "financial", title: "Financial Year Details", type: "item", url: "/basic/financialyeardetails" },
//           ],
//         },
//       ],
//     },
//     {
//       id: "ui-forms",
//       title: "USER ACCESS CONTROL",
//       type: "group",
//       icon: "feather icon-user",
//       children: [
//         {
//           id: "typography",
//           title: "User Master",
//           type: "item",
//           icon: "feather icon-user",
//           url: "/basic/userdetails",
//         },
//       ],
//     },
//     {
//       id: "ui-forms",
//       title: "STOCK , BARCODING & PURCHASE DETAILS",
//       type: "group",
//       icon: "icon-group",
//       children: [
//         { id: "forms", title: "Purchase Details", type: "item", icon: "feather icon-file-text", url: "/basic/purchasemaster" },
//         { id: "table", title: "Barcoding", type: "item", icon: "feather icon-server", url: "/basic/barcodedetails" },
//         { id: "breadcrumb", title: "Stock Entry", type: "item", icon: "feather icon-file-text", url: "/basic/itemmaster" },
//       ],
//     },
//     {
//       id: "sales",
//       title: "Sales and Sales Return Module",
//       type: "group",
//       icon: "icon-ui",
//       children: [
//         {
//           id: "sales",
//           title: "SALES",
//           type: "collapse",
//           icon: "feather icon-box",
//           children: [
//             { id: "button", title: "Sales", type: "item", url: "/forms/Retailsales" },
//             { id: "breadcrumb", title: "Sale Returns", type: "item", url: "/sale/bulksalereturn" },
//           ],
//         },
//       ],
//     },
//     {
//       id: "reports",
//       title: "REPORT SECTION",
//       type: "group",
//       icon: "icon-ui",
//       children: [
//         {
//           id: "reports",
//           title: "REPORTS",
//           type: "collapse",
//           icon: "feather icon-box",
//           children: [
//             { id: "button", title: "Sales Report", type: "item", url: "/reports/salesreports" },
//             { id: "badges", title: "Saletax Report", type: "item", url: "/reports/salestaxreports" },
//             { id: "badges", title: "Stock Report", type: "item", url: "/reports/stockreport" },
//             { id: "breadcrumb", title: "Discount Report", type: "item", url: "/reports/discountreport" },
//             { id: "collapse", title: "Customer Report", type: "item", url: "/reports/customerreport" },
//             { id: "typography", title: "Purchase Report", type: "item", url: "/reports/purchasereport" },
//           ],
//         },
//       ],
//     },
//     {
//        id: 'sales',
//       title: 'Printer Settings & Module Access',
//       type: 'group',
//       icon: 'icon-ui',
//       children: [
//         {
//           id: 'sales',
//           title: 'Printer Setting & Modules Access',
//           type: 'collapse',
//           icon: 'feather icon-box',
//           children: [
//             {
//               id: 'button',
//               title: 'Printer Settings',
//               type: 'item',
//               url: '/setting/printer'
//             },
//             {
//               id: 'breadcrumb',
//               title: 'Module Access',
//               type: 'item',
//               url: '/setting/module'
//             }
//           ]
//         }
//       ]
//     }
//   ],
// };


// // ✅ Filter menu based on user role
// const menuItems = {
//   items: filterMenuItems(fullMenu.items),
// };

// export default menuItems;



// import api from "./api";

// // ✅ Get stored user info
// const getStoredUser = () => JSON.parse(localStorage.getItem("userInfo")) || {};

// // ✅ Fetch user data and update localStorage
// const fetchUserData = async (userName) => {
//   if (userName === "Guest") {
//     console.warn("Guest user detected, no role-based data fetched.");
//     return;
//   }

//   try {
//     console.log("Fetching user data for:", userName);
//     const response = await api.get(`api/userrole/role-based-user/${userName}/`);
//     console.log("API Response:", response.data);

//     if (response.data.success && response.data.data) {
//       localStorage.setItem("userInfo", JSON.stringify(response.data.data));
//       redirectToFirstModule(response.data.data);
//       window.dispatchEvent(new Event("userInfoUpdated"));
//     }
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//   }
// };

// // Get the first accessible module URL
// const getFirstAccessibleModuleUrl = (modules, isAdmin) => {
//   if (isAdmin) {
//     console.log("Admin detected, redirecting to Dashboard.");
//     return "/garmentproject/#/app/dashboard/default";
//   } else {
//     const moduleNames = modules.map((mod) => mod.name);
//     console.log("User has access to modules:", moduleNames);
//     for (const group of fullMenu.items) {
//       for (const item of group.children || []) {
//         if (moduleNames.includes(item.title)) return `/garmentproject/#${item.url}`;
//         if (item.children) {
//           for (const subItem of item.children) {
//             if (moduleNames.includes(subItem.title)) return `/garmentproject/#${subItem.url}`;
//           }
//         }
//       }
//     }
//   }
//   return "/garmentproject/#/app/dashboard/default";
// };


// // ✅ Redirect user to the first available module
// const redirectToFirstModule = (user) => {
//   const firstModuleUrl = getFirstAccessibleModuleUrl(user.modules, user.is_admin);
//   localStorage.setItem("redirectAfterLogin", firstModuleUrl);
//   console.log("Redirecting user to:", firstModuleUrl);
//   window.location.href = firstModuleUrl;
// };

// // ✅ Redirect user on page load
// window.addEventListener("load", () => {
//   const storedUser = getStoredUser();
//   const redirectPage = localStorage.getItem("redirectAfterLogin");
//   if (storedUser.user_name && redirectPage) {
//     console.log("Redirecting user to:", redirectPage);
//     window.location.href = redirectPage;
//   }
// });

// //Listen for user info update
// window.addEventListener("userInfoUpdated", () => {
//   console.log("User info updated, reloading page...");
//   window.location.reload();
// });



// // ✅ Retrieve stored user info
// let storedUser = getStoredUser();
// let userName = storedUser?.user_name || "Guest";
// if (!storedUser || !storedUser.modules) {
//   fetchUserData(userName);
// }

// // ✅ Extract role info
// const isAdmin = storedUser?.is_admin || false;
// const allowedModules = storedUser?.modules?.map((mod) => mod.name) || [];

// // ✅ Filter menu items based on access
// const filterMenuItems = (menu) => {
//   if (isAdmin) return menu; // Show all for admin

//   return menu
//     .map((item) => {
//       if (item.children) {
//         const filteredChildren = item.children
//           .map((child) => {
//             if (child.children) {
//               const filteredSubChildren = child.children.filter((sub) =>
//                 allowedModules.includes(sub.title)
//               );
//               return filteredSubChildren.length > 0 ? { ...child, children: filteredSubChildren } : null;
//             }
//             return allowedModules.includes(child.title) ? child : null;
//           })
//           .filter(Boolean);

//         return filteredChildren.length > 0 ? { ...item, children: filteredChildren } : null;
//       }
//       return allowedModules.includes(item.title) ? item : null;
//     })
//     .filter(Boolean);
// };

// // Full menu structure
// const fullMenu = {
//     items: [
//       {
//         id: "navigation",
//         title: "Dashboard",
//         type: "group",
//         icon: "icon-navigation",
//         children: [
//           { id: "dashboard", title: "Dashboard", type: "item", icon: "feather icon-home", url: "/app/dashboard/default" },
//         ],
//       },
//       {
//         id: "ui-element",
//         title: "Configuration Module",
//         type: "group",
//         icon: "icon-ui",
//         children: [
//           {
//             id: "component",
//             title: "CONFIGURATIONS",
//             type: "collapse",
//             icon: "feather icon-box",
//             children: [
//               { id: "company", title: "Company Details", type: "item", url: "/basic/Companydetails" },
//               { id: "category", title: "Category Details", type: "item", url: "/basic/catagorymaster" },
//               { id: "party", title: "Party Details", type: "item", url: "/basic/partydetails" },
//               { id: "tax", title: "Tax Details", type: "item", url: "/basic/taxdetails" },
//               { id: "financial", title: "Financial Year Details", type: "item", url: "/basic/financialyeardetails" },
//             ],
//           },
//         ],
//       },
//       {
//         id: "ui-forms",
//         title: "USER ACCESS CONTROL",
//         type: "group",
//         icon: "feather icon-user",
//         children: [
//           {
//             id: "typography",
//             title: "User Master",
//             type: "item",
//             icon: "feather icon-user",
//             url: "/basic/userdetails",
//           },
//         ],
//       },
//       {
//         id: "ui-forms",
//         title: "STOCK , BARCODING & PURCHASE DETAILS",
//         type: "group",
//         icon: "icon-group",
//         children: [
//           { id: "forms", title: "Purchase Details", type: "item", icon: "feather icon-file-text", url: "/basic/purchasemaster" },
//           { id: "table", title: "Barcoding", type: "item", icon: "feather icon-server", url: "/basic/barcodedetails" },
//           { id: "breadcrumb", title: "Stock Entry", type: "item", icon: "feather icon-file-text", url: "/basic/itemmaster" },
//         ],
//       },
//       {
//         id: "sales",
//         title: "Sales and Sales Return Module",
//         type: "group",
//         icon: "icon-ui",
//         children: [
//           {
//             id: "sales",
//             title: "SALES",
//             type: "collapse",
//             icon: "feather icon-box",
//             children: [
//               { id: "button", title: "Sales", type: "item", url: "/forms/Retailsales" },
//               { id: "breadcrumb", title: "Sale Returns", type: "item", url: "/sale/bulksalereturn" },
//             ],
//           },
//         ],
//       },
//       {
//         id: "reports",
//         title: "REPORT SECTION",
//         type: "group",
//         icon: "icon-ui",
//         children: [
//           {
//             id: "reports",
//             title: "REPORTS",
//             type: "collapse",
//             icon: "feather icon-box",
//             children: [
//               { id: "button", title: "Sales Report", type: "item", url: "/reports/salesreports" },
//               { id: "badges", title: "Saletax Report", type: "item", url: "/reports/salestaxreports" },
//               { id: "badges", title: "Stock Report", type: "item", url: "/reports/stockreport" },
//               { id: "breadcrumb", title: "Discount Report", type: "item", url: "/reports/discountreport" },
//               { id: "collapse", title: "Customer Report", type: "item", url: "/reports/customerreport" },
//               { id: "typography", title: "Purchase Report", type: "item", url: "/reports/purchasereport" },
//             ],
//           },
//         ],
//       },
//       {
//          id: 'sales',
//         title: 'Printer Settings & Module Access',
//         type: 'group',
//         icon: 'icon-ui',
//         children: [
//           {
//             id: 'sales',
//             title: 'Printer Setting & Modules Access',
//             type: 'collapse',
//             icon: 'feather icon-box',
//             children: [
//               {
//                 id: 'button',
//                 title: 'Printer Settings',
//                 type: 'item',
//                 url: '/setting/printer'
//               },
//               {
//                 id: 'breadcrumb',
//                 title: 'Module Access',
//                 type: 'item',
//                 url: '/setting/module'
//               }
//             ]
//           }
//         ]
//       }
//     ],
//   };

// // ✅ Apply menu filtering
// const menuItems = {
//   items: isAdmin ? fullMenu.items : filterMenuItems(fullMenu.items),
// };

// // Ensure this logs correctly in the console for debugging
// console.log("isAdmin:", isAdmin);
// console.log("Final Menu Items:", menuItems);

// export default menuItems;








import api from "./api";

// ✅ Get stored user info
const getStoredUser = () => JSON.parse(localStorage.getItem("userInfo")) || {};

// ✅ Fetch user data and update localStorage
const fetchUserData = async (userName) => {
  if (userName === "Guest") {
    console.warn("Guest user detected, no role-based data fetched.");
    return;
  }

  try {
    console.log("Fetching user data for:", userName);
    const response = await api.get(`api/userrole/role-based-user/${userName}/`);
    console.log("API Response:", response.data);

    if (response.data.success && response.data.data) {
      localStorage.setItem("userInfo", JSON.stringify(response.data.data));
      redirectToFirstModule(response.data.data);
      window.dispatchEvent(new Event("userInfoUpdated"));
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

// ✅ Get the first accessible module URL
const getFirstAccessibleModuleUrl = (modules, isAdmin) => {
  if (isAdmin) {
    console.log("Admin detected, redirecting to Dashboard.");
    return "/garmentproject/#/app/dashboard/default";
  }

  const moduleNames = modules.map((mod) => mod.name);
  console.log("User has access to modules:", moduleNames);

  for (const group of fullMenu.items) {
    for (const item of group.children || []) {
      if (moduleNames.includes(item.title)) return `/garmentproject/#${item.url}`;
      if (item.children) {
        for (const subItem of item.children) {
          if (moduleNames.includes(subItem.title)) return `/garmentproject/#${subItem.url}`;
        }
      }
    }
  }
  return "/garmentproject/#/app/dashboard/default"; // Default if no match
};



const redirectToFirstModule = (user) => {
  let firstModuleUrl = user.is_admin
    ? "/garmentproject/#/app/dashboard/default" // ✅ Always redirect admin to dashboard
    : getFirstAccessibleModuleUrl(user.modules || [], user.is_admin);

  console.log("Setting redirect URL:", firstModuleUrl);
  localStorage.setItem("redirectAfterLogin", firstModuleUrl); // ✅ Store redirect URL correctly
  window.location.href = firstModuleUrl;
};




window.addEventListener("load", () => {
  const storedUser = getStoredUser();
  let redirectPage = localStorage.getItem("redirectAfterLogin");

  if (storedUser.is_admin) {
    redirectPage = "/garmentproject/#/app/dashboard/default"; // ✅ Ensure admin always goes to dashboard
  }

  if (storedUser.user_name && redirectPage) {
    console.log("Redirecting user to:", redirectPage);
    window.location.href = redirectPage;
  }
});


// ✅ Listen for user info update
window.addEventListener("userInfoUpdated", () => {
  console.log("User info updated, reloading page...");
  window.location.reload();
});

// ✅ Retrieve stored user info
let storedUser = getStoredUser();
let userName = storedUser?.user_name || "Guest";

// ✅ Fetch data only if user info is missing
if (!storedUser || !storedUser.modules) {
  fetchUserData(userName);
}

// ✅ Extract role info
const isAdmin = storedUser?.is_admin ?? false; // Ensure it's always boolean
const allowedModules = storedUser?.modules?.map((mod) => mod.name) || [];

// ✅ Filter menu items based on access
const filterMenuItems = (menu) => {
  if (isAdmin) return menu; // Show all for admin

  return menu
    .map((item) => {
      if (item.children) {
        const filteredChildren = item.children
          .map((child) => {
            if (child.children) {
              const filteredSubChildren = child.children.filter((sub) =>
                allowedModules.includes(sub.title)
              );
              return filteredSubChildren.length > 0 ? { ...child, children: filteredSubChildren } : null;
            }
            return allowedModules.includes(child.title) ? child : null;
          })
          .filter(Boolean);

        return filteredChildren.length > 0 ? { ...item, children: filteredChildren } : null;
      }
      return allowedModules.includes(item.title) ? item : null;
    })
    .filter(Boolean);
};


const fullMenu = {
    items: [
      {
        id: "navigation",
        title: "Dashboard",
        type: "group",
        icon: "icon-navigation",
        children: [
          { id: "dashboard", title: "Dashboard", type: "item", icon: "feather icon-home", url: "/app/dashboard/default" },
        ],
      },
      {
        id: "ui-element",
        title: "Configuration Module",
        type: "group",
        icon: "icon-ui",
        children: [
          {
            id: "component",
            title: "CONFIGURATIONS",
            type: "collapse",
            icon: "feather icon-box",
            children: [
              { id: "company", title: "Company Details", type: "item", url: "/basic/Companydetails" },
              { id: "category", title: "Category Details", type: "item", url: "/basic/catagorymaster" },
              { id: "party", title: "Party Details", type: "item", url: "/basic/partydetails" },
              { id: "tax", title: "Tax Details", type: "item", url: "/basic/taxdetails" },
              { id: "financial", title: "Financial Year Details", type: "item", url: "/basic/financialyeardetails" },
            ],
          },
        ],
      },
      {
        id: "ui-forms",
        title: "USER ACCESS CONTROL",
        type: "group",
        icon: "feather icon-user",
        children: [
          {
            id: "typography",
            title: "User Master",
            type: "item",
            icon: "feather icon-user",
            url: "/basic/userdetails",
          },
        ],
      },
      {
        id: "ui-forms",
        title: "STOCK , BARCODING & PURCHASE DETAILS",
        type: "group",
        icon: "icon-group",
        children: [
          { id: "forms", title: "Purchase Details", type: "item", icon: "feather icon-file-text", url: "/basic/purchasemaster" },
          { id: "table", title: "Barcoding", type: "item", icon: "feather icon-server", url: "/basic/barcodedetails" },
          { id: "breadcrumb", title: "Stock Entry", type: "item", icon: "feather icon-file-text", url: "/basic/itemmaster" },
        ],
      },
      {
        id: "sales",
        title: "Sales and Sales Return Module",
        type: "group",
        icon: "icon-ui",
        children: [
          {
            id: "sales",
            title: "SALES",
            type: "collapse",
            icon: "feather icon-box",
            children: [
              { id: "button", title: "Sales", type: "item", url: "/forms/Retailsales" },
              { id: "breadcrumb", title: "Sale Returns", type: "item", url: "/sale/bulksalereturn" },
            ],
          },
        ],
      },
      {
        id: "reports",
        title: "REPORT SECTION",
        type: "group",
        icon: "icon-ui",
        children: [
          {
            id: "reports",
            title: "REPORTS",
            type: "collapse",
            icon: "feather icon-box",
            children: [
              { id: "button", title: "Sales Report", type: "item", url: "/reports/salesreports" },
              { id: "badges", title: "Saletax Report", type: "item", url: "/reports/salestaxreports" },
              { id: "badges", title: "Stock Report", type: "item", url: "/reports/stockreport" },
              { id: "breadcrumb", title: "Discount Report", type: "item", url: "/reports/discountreport" },
              { id: "collapse", title: "Customer Report", type: "item", url: "/reports/customerreport" },
              { id: "typography", title: "Purchase Report", type: "item", url: "/reports/purchasereport" },
            ],
          },
        ],
      },
      {
         id: 'sales',
        title: 'Printer Settings & Module Access',
        type: 'group',
        icon: 'icon-ui',
        children: [
          {
            id: 'sales',
            title: 'Printer Setting & Modules Access',
            type: 'collapse',
            icon: 'feather icon-box',
            children: [
              {
                id: 'button',
                title: 'Printer Settings',
                type: 'item',
                url: '/setting/printer'
              },
              {
                id: 'breadcrumb',
                title: 'Module Access',
                type: 'item',
                url: '/setting/module'
              }
            ]
          }
        ]
      }
    ],
  };

// ✅ Apply menu filtering
const menuItems = {
  items: isAdmin ? fullMenu.items : filterMenuItems(fullMenu.items),
};

// ✅ Debugging logs
console.log("Stored User:", storedUser);
console.log("isAdmin:", isAdmin);
console.log("Allowed Modules:", allowedModules);
console.log("Final Menu Items:", menuItems);

export default menuItems;

















