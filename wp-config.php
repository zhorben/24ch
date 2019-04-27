<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'art_urfirm');

/** Имя пользователя MySQL */
define('DB_USER', 'art_urfirm');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', 'urfirm');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8mb4');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Mu]Vw0jmtk9*l1PwR,Tz&N!4?i!]@Aqs2uk?:`Nz$hZsuHl*?h#il`Q OMJ}XfTi');
define('SECURE_AUTH_KEY',  '8JtLV*#o!LDPEQ^95x}?`?|O6o1M;LGowo8(v1lTJ!r$X1)+T:_V!@&vhWH`SVj6');
define('LOGGED_IN_KEY',    'd^B.2_22fvE{*7yU]3V,PwUeoX[#CR:{7t(ufiyFgM=#]q^,~>*GF9jBIwon*7VQ');
define('NONCE_KEY',        '^<3;a9+LMN.Cc#h>$7_pKk<!kRa1pv0myIw2BoW{L<cd4a16KX3,#eyG2dJQ)vE[');
define('AUTH_SALT',        ']4w4Gf}xpC7iaZzXCTvV[!BSR,(3;q[c4gN:VCd4-9Q*r@^a5`J]UaOH[N`lGwU[');
define('SECURE_AUTH_SALT', 'V*=;.Rnup$h<.h[ES(zbDO}wtb:v7QG0i!fRJ}vOUqqyNP!u4{7eyGY**>eKVq/]');
define('LOGGED_IN_SALT',   '.{uB`bxcW_4WP2$k=2RMijyr5.4~ngIJOrmP#]@8;^M9i]It_?vx&pc cL6Su +M');
define('NONCE_SALT',       '~u;mNb@hUB7Vs)UIR#qSyfIXa:oQ$ka2vka&8}[p@RFfpH$8.[U4usM`h5=9awca');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'urfirm_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 * 
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
