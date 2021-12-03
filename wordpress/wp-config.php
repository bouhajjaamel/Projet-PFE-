<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'projet1000' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'YVSbt))]1P=XZu`&b?OtnoNLfwGyT&]W|+{h[L.-hrbpx0KEp=Y,(EF,Hj,Jv/ve' );
define( 'SECURE_AUTH_KEY',  'c]C.$ZeA.([2GPl(Fg!cSGDJUr3|gbrQ&pX4NAEsZDYic$gMjKp)tF?+~P$QX+po' );
define( 'LOGGED_IN_KEY',    's=-nEG5^MHAn$4Z@ubUfU]xPD`!Cp{_HEL+K{;(|]gep-%2}v<Y4k]ODgJAx=g8Q' );
define( 'NONCE_KEY',        '?./dwMLxqz8p;c `XyO*EUZ*=3Reyi{oo tBEYzY!V4q&#|7sb.=,*9eft Hf0Ud' );
define( 'AUTH_SALT',        '}qo(_5;3Y@eIGGvExTpW5xqo$sYv+WKRfh e6EYOhZq@<nPbcI{f4!;cS~2.Lk9[' );
define( 'SECURE_AUTH_SALT', 'jx.w2cm:?yS]o&U`g},`uN]A%Df:9Yz]?XB~zhK@QOVi3_P4B`VN%C=iyIC$ob>D' );
define( 'LOGGED_IN_SALT',   '[Db>*ms~^CW{b!88w hA,J)^w{ftJ!aOUxnxeWq8+/I(!,.B!#IQ)#_q_STD%/zP' );
define( 'NONCE_SALT',       'NvZ!v[>:zgIQFo}!_HznHxoA:p,;(&WvHjS#1&x*.z[+4B9n.U`-#^ZmIBfR7s2(' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
define('FS_METHOD','direct'); 