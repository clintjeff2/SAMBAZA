import React from "react";
import { Route, Routes } from "react-router-dom";

import ConfirmMail from "../views/dashboard/authentication/ConfirmMail";
import LockScreen from "../views/dashboard/authentication/LockScreen";
import RecoverPassword from "../views/dashboard/authentication/RecoverPassword";
import ResetPassword from "../views/dashboard/authentication/ResetPassword";
import SignIn from "../views/dashboard/authentication/SignIn";
import SignUp from "../views/dashboard/authentication/SignUp";

function Auth() {
	return (
		<>
			<Routes>
				<Route path="/dashboard/authentication/register" element={<SignUp />} />
				<Route path="/dashboard/authentication/login" element={<SignIn />} />
				<Route
					path="/dashboard/authentication/reset-password"
					element={<ResetPassword />}
				/>
				<Route
					path="/dashboard/authentication/recover-password"
					element={<RecoverPassword />}
				/>
				<Route
					path="/dashboard/authentication/confirm-email"
					element={<ConfirmMail />}
				/>
				<Route
					path="/dashboard/authentication/lock-screen"
					element={<LockScreen />}
				/>
			</Routes>
		</>
	);
}

export default Auth;
