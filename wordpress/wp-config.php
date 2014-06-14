<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'trulkhor');

/** MySQL database username */
define('DB_USER', 'trulkhor');

/** MySQL database password */
define('DB_PASSWORD', 'trulkhor');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'ilO{u?QQ+c#ZYzbI%-ENd/fwr!M67C ?g>wXw8Jo{iP$V}vr8-2j;QB{FK46BQPZ');
define('SECURE_AUTH_KEY',  'i?lD?w[@E):WyFxZ/#[sz bj|y.I58;~^Bu@a^Z^Ip)/_)0!fiY%a{LVegbnZ|w+');
define('LOGGED_IN_KEY',    'Tc=Qkfzb%[m(q)Xol1M7X[91ZQCl}fq%(<bb(n=pxE|]hR2(?P$$z{8u9M+WVg~$');
define('NONCE_KEY',        'H$v9bK51|CI=opBr<#K*#k?[yzbHqnSv0Opu//!8=;$cB#JpjG[9)n@}F?|UbkJV');
define('AUTH_SALT',        'Hxot-hC@yg_Rw:FfL@./kaR[t=yG&&V%iQ?,o%8)} u1utPHfh_U$25Z}i<<Yk`f');
define('SECURE_AUTH_SALT', 'r4%r/gu$SyZlplI~MB)P/f^8D%X6@0r.blMCcPF@#Y{j5da}yT64iMpKO6idt{N1');
define('LOGGED_IN_SALT',   'n-{]II1o$/ J2~2Ll^al_0Z1!:11J&/AxY2RdF*lqnpK~4kqE00p[a5w`8w62aGV');
define('NONCE_SALT',       ';*_qdpG?D[oA?Ub[,+R#Q!BeIT[M ,e&`J7yYMWJe$gYXzJD*+kJ|q}lQjc7e1Dz');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
