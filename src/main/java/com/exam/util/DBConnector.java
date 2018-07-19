package com.exam.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnector {
	private static String jdbcUrl;
	private static String user;
	private static String password;
	private static String driver;

	public static String getDriver() {
		return driver;
	}

	public static void setDriver(String driver) {
		DBConnector.driver = driver;
	}

	public static String getJdbcUrl() {
		return jdbcUrl;
	}

	public static void setJdbcUrl(String jdbcUrl) {
		DBConnector.jdbcUrl = jdbcUrl;
	}

	public static String getUser() {
		return user;
	}

	public static void setUser(String user) {
		DBConnector.user = user;
	}

	public static String getPassword() {
		return password;
	}

	public static void setPassword(String password) {
		DBConnector.password = password;
	}

	public static Connection getConnection(){
        try {
			Class.forName(driver);
			return DriverManager.getConnection(jdbcUrl, user, password);
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        return null;
        
    }
}
