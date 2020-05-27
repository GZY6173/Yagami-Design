import { Dimensions, PixelRatio } from 'react-native'
import Platform from './Platform'

// 屏幕大小比例
export const DEVICE_WIDTH_DP = Dimensions.get('window').width
export const DEVICE_HEIGHT_DP = Dimensions.get('window').height
export const PIXEL = 1 / PixelRatio.get()

// UI给图比例大小
const DEFAULT_WIDTH_PX = Platform.isPad() ? Platform.isLandscape() ? 2048 : 1536 : 750

/**
 * [pxToDp 将px转成当前设备的pt值]
 */
export function pxToDp(px) {
	return px * DEVICE_WIDTH_DP / DEFAULT_WIDTH_PX
}

const Dimens = {
	fill_width: Dimensions.get('window').width,
	fill_height: Dimensions.get('window').height,
	aline: pxToDp(0.5),
	p1: PIXEL,
	p2: pxToDp(2),
	p3: pxToDp(3),
	p4: pxToDp(4),
	p5: pxToDp(5),
	p5f: pxToDp(5.5),
	p6: pxToDp(6),
	p7: pxToDp(7),
	p8: pxToDp(8),
	p10: pxToDp(10),
	p11: pxToDp(11),
	p12: pxToDp(12),
	p14: pxToDp(14),
	p15: pxToDp(15),
	p16: pxToDp(16),
	p17: pxToDp(17),
	p18: pxToDp(18),
	p20: pxToDp(20),
	p22: pxToDp(22),
	p24: pxToDp(24),
	p26: pxToDp(26),
	p28: pxToDp(28),
	p30: pxToDp(30),
	p32: pxToDp(32),
	p34: pxToDp(34),
	p35: pxToDp(35),
	p36: pxToDp(36),
	p38: pxToDp(38),
	p39: pxToDp(39),
	p40: pxToDp(40),
	p42: pxToDp(42),
	p44: pxToDp(44),
	p46: pxToDp(46),
	p48: pxToDp(48),
	p50: pxToDp(50),
	p52: pxToDp(52),
	p54: pxToDp(54),
	p56: pxToDp(56),
	p58: pxToDp(58),
	p60: pxToDp(60),
	p62: pxToDp(62),
	p64: pxToDp(64),
	p65: pxToDp(65),
	p66: pxToDp(66),
	p68: pxToDp(68),
	p70: pxToDp(70),
	p72: pxToDp(72),
	p74: pxToDp(74),
	p75: pxToDp(75),
	p76: pxToDp(76),
	p78: pxToDp(78),
	p80: pxToDp(80),
	p82: pxToDp(82),
	p84: pxToDp(84),
	p86: pxToDp(86),
	p88: pxToDp(88),
	p90: pxToDp(90),
	p92: pxToDp(92),
	p94: pxToDp(94),
	p96: pxToDp(96),
	p98: pxToDp(98),
	p100: pxToDp(100),
	p102: pxToDp(102),
	p104: pxToDp(104),
	p105: pxToDp(105),
	p106: pxToDp(106),
	p108: pxToDp(108),
	p110: pxToDp(110),
	p112: pxToDp(112),
	p114: pxToDp(114),
	p116: pxToDp(116),
	p118: pxToDp(118),
	p120: pxToDp(120),
	p122: pxToDp(122),
	p124: pxToDp(124),
	p126: pxToDp(126),
	p128: pxToDp(128),
	p130: pxToDp(130),
	p132: pxToDp(132),
	p134: pxToDp(134),
	p136: pxToDp(136),
	p138: pxToDp(138),
	p140: pxToDp(140),
	p142: pxToDp(142),
	p144: pxToDp(144),
	p146: pxToDp(146),
	p148: pxToDp(148),
	p150: pxToDp(150),
	p152: pxToDp(152),
	p156: pxToDp(156),
	p160: pxToDp(160),
	p162: pxToDp(162),
	p166: pxToDp(166),
	p168: pxToDp(168),
	p170: pxToDp(170),
	p172: pxToDp(172),
	p174: pxToDp(174),
	p176: pxToDp(176),
	p178: pxToDp(178),
	p179: pxToDp(179),
	p180: pxToDp(180),
	p182: pxToDp(182),
	p184: pxToDp(184),
	p186: pxToDp(186),
	p188: pxToDp(188),
	p190: pxToDp(190),
	p192: pxToDp(192),
	p194: pxToDp(194),
	p196: pxToDp(196),
	p198: pxToDp(198),
	p200: pxToDp(200),
	p210: pxToDp(210),
	p212: pxToDp(212),
	p214: pxToDp(214),
	p216: pxToDp(216),
	p218: pxToDp(218),
	p219: pxToDp(219),
	p220: pxToDp(220),
	p221: pxToDp(221),
	p222: pxToDp(222),
	p224: pxToDp(224),
	p226: pxToDp(226),
	p229: pxToDp(229),
	p230: pxToDp(230),
	p232: pxToDp(232),
	p234: pxToDp(234),
	p236: pxToDp(236),
	p238: pxToDp(238),
	p240: pxToDp(240),
	p246: pxToDp(246),
	p248: pxToDp(248),
	p250: pxToDp(250),
	p252: pxToDp(252),
	p256: pxToDp(256),
	p260: pxToDp(260),
	p262: pxToDp(262),
	p264: pxToDp(264),
	p266: pxToDp(266),
	p268: pxToDp(268),
	p270: pxToDp(270),
	p276: pxToDp(276),
	p278: pxToDp(278),
	p280: pxToDp(280),
	p288: pxToDp(288),
	p290: pxToDp(290),
	p296: pxToDp(296),
	p294: pxToDp(294),
	p298: pxToDp(298),
	p300: pxToDp(300),
	p304: pxToDp(304),
	p306: pxToDp(306),
	p310: pxToDp(310),
	p314: pxToDp(314),
	p320: pxToDp(320),
	p322: pxToDp(322),
	p326: pxToDp(326),
	p328: pxToDp(328),
	p330: pxToDp(330),
	p332: pxToDp(332),
	p334: pxToDp(334),
	p336: pxToDp(336),
	p338: pxToDp(338),
	p340: pxToDp(340),
	p344: pxToDp(344),
	p348: pxToDp(348),
	p350: pxToDp(350),
	p360: pxToDp(360),
	p362: pxToDp(362),
	p366: pxToDp(366),
	p370: pxToDp(370),
	p372: pxToDp(372),
	p376: pxToDp(376),
	p378: pxToDp(378),
	p380: pxToDp(380),
	p384: pxToDp(384),
	p388: pxToDp(388),
	p392: pxToDp(392),
	p396: pxToDp(396),
	p400: pxToDp(400),
	p408: pxToDp(408),
	p410: pxToDp(410),
	p412: pxToDp(412),
	p416: pxToDp(416),
	p420: pxToDp(420),
	p440: pxToDp(440),
	p446: pxToDp(446),
	p450: pxToDp(450),
	p460: pxToDp(460),
	p464: pxToDp(464),
	p470: pxToDp(470),
	p480: pxToDp(480),
	p490: pxToDp(490),
	p492: pxToDp(492),
	p500: pxToDp(500),
	p504: pxToDp(504),
	p510: pxToDp(510),
	p512: pxToDp(512),
	p518: pxToDp(518),
	p520: pxToDp(520),
	p524: pxToDp(524),
	p528: pxToDp(528),
	p530: pxToDp(530),
	p532: pxToDp(532),
	p534: pxToDp(534),
	p536: pxToDp(536),
	p540: pxToDp(540),
	p544: pxToDp(544),
	p550: pxToDp(550),
	p552: pxToDp(552),
	p560: pxToDp(560),
	p564: pxToDp(564),
	p568: pxToDp(568),
	p570: pxToDp(570),
	p580: pxToDp(580),
	p586: pxToDp(586),
	p590: pxToDp(590),
	p596: pxToDp(596),
	p600: pxToDp(600),
	p610: pxToDp(610),
	p620: pxToDp(620),
	p630: pxToDp(630),
	p640: pxToDp(640),
	p650: pxToDp(650),
	p652: pxToDp(652),
	p660: pxToDp(660),
	p664: pxToDp(664),
	p670: pxToDp(670),
	p680: pxToDp(680),
	p686: pxToDp(686),
	p688: pxToDp(688),
	p690: pxToDp(690),
	p692: pxToDp(692),
	p696: pxToDp(696),
	p700: pxToDp(700),
	p708: pxToDp(708),
	p710: pxToDp(710),
	p712: pxToDp(712),
	p720: pxToDp(720),
	p728: pxToDp(728),
	p740: pxToDp(740),
	p744: pxToDp(744),
	p750: pxToDp(750),
	p752: pxToDp(752),
	p764: pxToDp(764),
	p772: pxToDp(772),
	p776: pxToDp(776),
	p780: pxToDp(780),
	p768: pxToDp(768),
	p800: pxToDp(800),
	p848: pxToDp(848),
	p850: pxToDp(850),
	p858: pxToDp(858),
	p860: pxToDp(860),
	p870: pxToDp(870),
	p880: pxToDp(880),
	p900: pxToDp(900),
	p932: pxToDp(932),
	p944: pxToDp(944),
	p920: pxToDp(920),
	p940: pxToDp(940),
	p962: pxToDp(962),
	p968: pxToDp(968),
	p1032: pxToDp(1032),
	p1040: pxToDp(1040),
	p1128: pxToDp(1128),
	p1200: pxToDp(1200),
	p1316: pxToDp(1316),
	p1212: pxToDp(1212),
	p1492: pxToDp(1492),
	p1504: pxToDp(1504),
	p1550: pxToDp(1550),
	p1692: pxToDp(1692),
	p1726: pxToDp(1726),
	p1810: pxToDp(1810),
	p1830: pxToDp(1830),
	p1840: pxToDp(1840),
	p1920: pxToDp(1920),
	p1940: pxToDp(1940),
	p2238: pxToDp(2238),
	p2800: pxToDp(2800),
	p2380: pxToDp(2380),
	p2400: pxToDp(2400),
	p2588: pxToDp(2588),
	p4250: pxToDp(4250),
	p7086: pxToDp(7086),
}

export default Dimens