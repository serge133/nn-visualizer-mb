import { MODEL_VERSIONS } from "@/math/models";

const v1 = [
  { x: 0.670428566270834, y: -6.55043737127488, label: 1 },
  { x: -8.32385500411339, y: -4.87267507551812, label: 1 },
  { x: -4.60853654060685, y: -2.66678063418689, label: 1 },
  { x: -6.33963813138926, y: -13.4662616280708, label: 1 },
  { x: -3.37972921598481, y: -10.2238425909259, label: 1 },
  { x: 3.13705394662644, y: 8.36596557544156, label: 1 },
  { x: -21.4364349273731, y: -1.42668687860453, label: 1 },
  { x: 3.70320459859959, y: 7.54256796181995, label: 1 },
  { x: 2.7331531538669, y: 2.0992053085186, label: 1 },
  { x: -2.81565944888462, y: 12.9841920444077, label: 1 },
  { x: -5.40574852628276, y: 1.69773012313363, label: 1 },
  { x: -5.07343677153254, y: -4.94399550790709, label: 1 },
  { x: -6.41867138137841, y: -7.53261186922409, label: 1 },
  { x: 0.541961132527333, y: -4.93191570430647, label: 1 },
  { x: -2.6124029311769, y: -7.55783294381087, label: 1 },
  { x: -0.432248868000332, y: -8.89167010140364, label: 1 },
  { x: 2.2071876168763, y: -9.13903692910562, label: 1 },
  { x: -3.4180226148385, y: 3.4861238212921, label: 1 },
  { x: 21.5837863232342, y: 1.47484814510059, label: 1 },
  { x: 11.297186056538, y: -1.52382744464052, label: 1 },
  { x: 0.41232880540027, y: -0.880082903604255, label: 1 },
  { x: 4.52624667654369, y: 22.283757714176, label: 1 },
  { x: -6.04576154362473, y: 4.65411168418113, label: 1 },
  { x: -1.27059536314758, y: -15.6601612679614, label: 1 },
  { x: -7.04834772698226, y: 6.46701188279096, label: 1 },
  { x: -8.43768690734878, y: -6.75652290688568, label: 1 },
  { x: 8.17502096738866, y: 10.2524843033294, label: 1 },
  { x: 17.7288460345616, y: 11.7531965484899, label: 1 },
  { x: 7.25503507663157, y: 0.791146040100777, label: 1 },
  { x: -7.44636340261076, y: -16.9654715235891, label: 1 },
  { x: 5.97288380490548, y: -10.9140204177898, label: 1 },
  { x: -16.7610185242793, y: -7.85492775375033, label: 1 },
  { x: 0.147607787977579, y: 2.79750071719525, label: 1 },
  { x: 13.8509875283108, y: 4.07306316410508, label: 1 },
  { x: 7.09320243358046, y: -12.9394679158297, label: 1 },
  { x: -12.880803559499, y: 5.84488093395064, label: 1 },
  { x: 9.69157596938959, y: 4.98367597523251, label: 1 },
  { x: 1.45493657030299, y: 15.6354311086029, label: 1 },
  { x: 4.94015397054352, y: 3.60826876806401, label: 1 },
  { x: 0.483438015194579, y: -6.47909761530873, label: 1 },
  { x: -6.70450685583071, y: 4.65422126975417, label: 1 },
  { x: -16.4780758237713, y: -3.3842162581875, label: 1 },
  { x: 5.56440371768084, y: -5.46012444011372, label: 1 },
  { x: 0.503722956904383, y: -2.00208971789706, label: 1 },
  { x: -5.05799134628076, y: 4.1477188693833, label: 1 },
  { x: -15.1301476773151, y: 12.6275231930386, label: 1 },
  { x: 10.4125132779661, y: -10.930174634979, label: 1 },
  { x: 7.83033581023225, y: 11.6866579378441, label: 1 },
  { x: 14.2865309495935, y: 3.41732393284484, label: 1 },
  { x: 2.99883827522448, y: 3.76859323697107, label: 1 },
  { x: 7.30866259949855, y: -6.02261089168958, label: 1 },
  { x: 4.94726691919105, y: -1.64895142311816, label: 1 },
  { x: 9.30282108887972, y: -1.63289359818677, label: 1 },
  { x: 13.0709765106793, y: -5.5418263190325, label: 1 },
  { x: -4.37508286169387, y: 3.66693150943768, label: 1 },
  { x: 6.59293470603557, y: -25.556746831289, label: 1 },
  { x: -9.01952851615716, y: -10.4094622961957, label: 1 },
  { x: -10.2225526610031, y: 8.28563037518041, label: 1 },
  { x: -9.97140336674209, y: -10.8683802592497, label: 1 },
  { x: -16.597308893162, y: 4.77671080694034, label: 1 },
  { x: 5.25531618181628, y: 10.0282818682415, label: 1 },
  { x: 3.47173566667583, y: 1.93794661579162, label: 1 },
  { x: 4.57236115933993, y: -10.5687641617891, label: 1 },
  { x: 12.9993655581824, y: 1.50226019296416, label: 1 },
  { x: 13.4553330823115, y: 12.9047384370493, label: 1 },
  { x: 10.1295526123925, y: 10.7258812432127, label: 1 },
  { x: -13.8617108653434, y: 19.0955737865506, label: 1 },
  { x: -8.13603816592656, y: -6.34673946004763, label: 1 },
  { x: -5.57838814508861, y: 3.67857635502297, label: 1 },
  { x: -6.1507051775686, y: -2.35110579044266, label: 1 },
  { x: 1.43745873832223, y: -15.0973231481248, label: 1 },
  { x: 0.0773781403375022, y: -1.22380744679429, label: 1 },
  { x: -2.14049938917914, y: -3.34761851575072, label: 1 },
  { x: -4.51949089194595, y: 16.240478656408, label: 1 },
  { x: 2.86432603430655, y: 1.27092651582282, label: 1 },
  { x: -4.91771262683426, y: 4.81810650909853, label: 1 },
  { x: 9.61869723424255, y: 6.04474943496066, label: 1 },
  { x: 9.97762550822824, y: -7.58598899571497, label: 1 },
  { x: 7.67226066724156, y: -6.11662923624358, label: 1 },
  { x: -3.51149295082593, y: 8.25259967740031, label: 1 },
  { x: 0.919461856068667, y: 1.60323488867674, label: 1 },
  { x: 6.69709953416546, y: 16.5066080889688, label: 1 },
  { x: 2.13550070232052, y: -1.06624958317029, label: 1 },
  { x: -10.0228294871618, y: 9.16041483639915, label: 1 },
  { x: 17.4902956391014, y: 3.4772048539922, label: 1 },
  { x: -8.3540895917202, y: -4.42844427865073, label: 1 },
  { x: -6.7307708680686, y: 1.71220330443509, label: 1 },
  { x: -4.78808779373464, y: 3.85274007455106, label: 1 },
  { x: 9.95792469572281, y: -0.856001423086331, label: 1 },
  { x: 2.64064419652125, y: 2.59066299735163, label: 1 },
  { x: -8.37673657090743, y: 4.11891926410117, label: 1 },
  { x: 7.07298137106102, y: -4.02539463602153, label: 1 },
  { x: 4.77820560629742, y: -1.58408333007978, label: 1 },
  { x: 1.98156537503112, y: 6.08833613196358, label: 1 },
  { x: -2.65653331912208, y: -4.61881270493494, label: 1 },
  { x: 10.13433174962, y: 6.05069906253175, label: 1 },
  { x: 2.11570901587482, y: -8.61250009437497, label: 1 },
  { x: -13.193559330238, y: 6.31808297859977, label: 1 },
  { x: -2.6029349951884, y: 1.46877050104979, label: 1 },
  { x: -0.562956069365514, y: -3.1310902841521, label: 1 },
  { x: -6.32166262349711, y: 21.2524904471543, label: 0 },
  { x: 16.4103082285945, y: 24.645546151486, label: 0 },
  { x: 10.533176044666, y: 21.3347555695816, label: 0 },
  { x: -29.0066412360844, y: -7.48863233926111, label: 0 },
  { x: 32.5267643959555, y: 4.29175294632286, label: 0 },
  { x: -27.5721132144716, y: 9.77576626478877, label: 0 },
  { x: 30.5337919665246, y: 14.2595617905831, label: 0 },
  { x: 2.54313836364321, y: 21.675033098523, label: 0 },
  { x: -7.64707672688036, y: 26.5339232392982, label: 0 },
  { x: 29.6448587343777, y: 13.4315858778277, label: 0 },
  { x: 30.7350459091761, y: -8.73851992893829, label: 0 },
  { x: -33.5938170427269, y: -0.298583164117494, label: 0 },
  { x: 33.7868459648602, y: 1.07750663209501, label: 0 },
  { x: -0.790006088222655, y: 22.3729550285351, label: 0 },
  { x: 27.3247855249842, y: -19.5441623251527, label: 0 },
  { x: -30.7240885399932, y: -12.1351978188888, label: 0 },
  { x: 33.0519829422856, y: 4.60395230819507, label: 0 },
  { x: 31.6984318637332, y: -13.3395225450391, label: 0 },
  { x: -13.4459762058668, y: 21.8185321165566, label: 0 },
  { x: -5.43929553029626, y: 29.27059169406, label: 0 },
  { x: 9.73236293669934, y: -26.776673771937, label: 0 },
  { x: 9.60042635142207, y: -36.1908725343863, label: 0 },
  { x: -17.8073896283151, y: 22.4017656693, label: 0 },
  { x: 32.1291361107827, y: -1.54585751179611, label: 0 },
  { x: 8.08265275151827, y: 25.5875523763964, label: 0 },
  { x: -18.4101111328523, y: -24.3514589949321, label: 0 },
  { x: 25.0745372000054, y: -6.30083920652716, label: 0 },
  { x: -34.1418078678136, y: -10.0988124778827, label: 0 },
  { x: -17.84147874949, y: 27.3597375453789, label: 0 },
  { x: 31.8964914848187, y: 11.3246584528606, label: 0 },
  { x: -18.1011095129643, y: 19.144839851983, label: 0 },
  { x: -28.7757661354988, y: -13.505109956575, label: 0 },
  { x: 25.5874621654142, y: 22.1885435674062, label: 0 },
  { x: -23.101259797831, y: 11.4278521733236, label: 0 },
  { x: 18.6021990564309, y: -24.2962045701904, label: 0 },
  { x: -0.828746975267714, y: 30.4370284155958, label: 0 },
  { x: -14.8086284208608, y: -26.5907418689909, label: 0 },
  { x: 19.8536866085591, y: 19.3915695636905, label: 0 },
  { x: -33.2677102903615, y: -13.6900768342947, label: 0 },
  { x: 37.419477244442, y: -3.08159340533358, label: 0 },
  { x: -17.1388301584033, y: -14.3137207256781, label: 0 },
  { x: -13.5478464430128, y: 21.747227413499, label: 0 },
  { x: 18.9694003315701, y: -28.3285949496263, label: 0 },
  { x: 7.66889862660569, y: 34.3554076030944, label: 0 },
  { x: -8.46385359329816, y: 30.4955374384891, label: 0 },
  { x: 15.2835814466849, y: 26.4933058864875, label: 0 },
  { x: -27.149865196557, y: 4.43228247966207, label: 0 },
  { x: -31.412825271329, y: -0.958861990846297, label: 0 },
  { x: 29.3573287439502, y: 11.7125157240712, label: 0 },
  { x: -21.5177949450833, y: 13.9190332165235, label: 0 },
  { x: -7.80420905311829, y: 29.627781586761, label: 0 },
  { x: -24.6176958249057, y: 4.32968216546591, label: 0 },
  { x: 26.5223464953841, y: 14.2904636241991, label: 0 },
  { x: 15.2040607007907, y: -28.7542652449865, label: 0 },
  { x: -21.4253645509631, y: -16.0289240096087, label: 0 },
  { x: -22.5743582823315, y: -11.3504102859534, label: 0 },
  { x: -15.3448759705358, y: 16.4498451134015, label: 0 },
  { x: -8.39304614928444, y: -35.9320293667208, label: 0 },
  { x: -6.27344838194342, y: 36.6915411169576, label: 0 },
  { x: -6.01673637105485, y: -27.5432533873871, label: 0 },
  { x: -2.41792409214119, y: 27.1786583902157, label: 0 },
  { x: -28.2507677910791, y: 9.33039571144117, label: 0 },
  { x: 31.6344703832667, y: 21.5758067550856, label: 0 },
  { x: -31.1601578716264, y: -11.7230850288318, label: 0 },
  { x: -29.3425774670615, y: -5.84077401652329, label: 0 },
  { x: 25.6110770242446, y: 14.2027824753971, label: 0 },
  { x: -14.1088663204943, y: -26.4461331133313, label: 0 },
  { x: -12.9938085114399, y: -19.7955170263091, label: 0 },
  { x: -21.7719538293379, y: -16.9486036327318, label: 0 },
  { x: 21.3676371543081, y: 16.7171015754521, label: 0 },
  { x: 2.75142994416531, y: -20.1807872781453, label: 0 },
  { x: -15.0617179719322, y: 16.1098643434119, label: 0 },
  { x: 21.343240963795, y: 21.321330451536, label: 0 },
  { x: 26.0495850683061, y: -15.9719865358853, label: 0 },
  { x: -33.6780226878299, y: -12.9826298464238, label: 0 },
  { x: 22.1733960795174, y: 28.7312116784308, label: 0 },
  { x: 23.7806671746621, y: -19.9440417836929, label: 0 },
  { x: 25.1715812206666, y: -10.6821569428114, label: 0 },
  { x: 8.2075023149984, y: 31.6182243836399, label: 0 },
  { x: -29.6571657158747, y: -1.55327329897486, label: 0 },
  { x: -24.705114809742, y: 23.2440435886194, label: 0 },
  { x: 20.3775790527054, y: -23.8733964533953, label: 0 },
  { x: 17.237284280423, y: 33.2917106302936, label: 0 },
  { x: 25.6733379607589, y: -2.60588338044373, label: 0 },
  { x: 1.64416778075726, y: -28.3389184973853, label: 0 },
  { x: -6.14159303991356, y: 28.1015337651703, label: 0 },
  { x: -23.2321906218113, y: -0.558997900465544, label: 0 },
  { x: 22.5677130806449, y: -25.7679034826197, label: 0 },
  { x: 19.95120746535, y: -9.40800901520188, label: 0 },
  { x: -25.8401552626097, y: 17.6692074737696, label: 0 },
  { x: 32.0620912510577, y: -0.331582972606794, label: 0 },
  { x: -31.8767697673088, y: -23.3967148384302, label: 0 },
  { x: -32.407367319096, y: 14.9842820719618, label: 0 },
  { x: -5.8217852997327, y: -30.4295768000049, label: 0 },
  { x: 34.352552548447, y: 1.4904388816847, label: 0 },
  { x: -2.83905182756657, y: -36.5658182740655, label: 0 },
  { x: 25.9840218082518, y: 30.0657857918836, label: 0 },
  { x: 29.511403833874, y: -4.99637781789822, label: 0 },
  { x: -16.0307734519552, y: -18.5254606545747, label: 0 },
  { x: -30.2517306886716, y: -9.48991576643169, label: 0 },
];

const v2 = [
  { x: -20.741386003882027, y: 1.6888526307952203, label: 0 },
  { x: 8.842263176103817, y: 9.149770134659063, label: 0 },
  { x: 4.851798901627578, y: 13.991933886017998, label: 0 },
  { x: 12.834103046415109, y: -7.730561459420343, label: 1 },
  { x: -0.6610317712923788, y: -2.75489784796978, label: 1 },
  { x: -1.2247237710065706, y: 3.6201210724355977, label: 1 },
  { x: -15.021814871362626, y: 16.44530893817586, label: 0 },
  { x: 18.343996583760013, y: -4.068911593932734, label: 1 },
  { x: 23.082030746112515, y: -2.506704596306496, label: 1 },
  { x: -2.851560907290517, y: 19.065350243953567, label: 0 },
  { x: -11.526369901056345, y: 14.874761002338154, label: 0 },
  { x: 23.674255247097754, y: -2.102929693990681, label: 1 },
  { x: 18.014888445532844, y: -7.9509420226777685, label: 1 },
  { x: -17.373193019606735, y: 10.592154976754404, label: 0 },
  { x: 23.20650932282875, y: 3.0936328889356584, label: 1 },
  { x: 23.056457563162656, y: -1.8028558710613978, label: 1 },
  { x: -6.026270234352204, y: 24.65437435683424, label: 0 },
  { x: 10.702012916108488, y: -10.348828953229859, label: 1 },
  { x: -20.029813370050352, y: 12.655002343695408, label: 0 },
  { x: -11.359705736594922, y: 14.917104780596322, label: 0 },
  { x: 0.07045069669066617, y: -1.36743863568202, label: 1 },
  { x: 8.447173060295086, y: 11.418737587162653, label: 0 },
  { x: 9.548520780631074, y: -12.411056568378637, label: 1 },
  { x: -18.1549093704593, y: 6.435236210236603, label: 0 },
  { x: -10.982314524270171, y: 15.720072745028801, label: 0 },
  { x: -11.032788586757217, y: 16.639160268052308, label: 0 },
  { x: -17.17756568992766, y: 11.701309479356015, label: 0 },
  { x: -12.271652648072862, y: 18.875579768914307, label: 0 },
  { x: -1.8235849505638808, y: -3.9621597227206395, label: 1 },
  { x: 0.03681140076801981, y: -8.538070097976805, label: 1 },
  { x: 10.710404926503802, y: 5.1554621204409745, label: 0 },
  { x: 9.432875948497669, y: 11.888736356495944, label: 0 },
  { x: -3.503089426411342, y: 19.883685920548054, label: 0 },
  { x: -17.965618472348375, y: 13.732520917452621, label: 0 },
  { x: 8.793466018422931, y: -8.043122551851354, label: 1 },
  { x: -4.816352095756896, y: 7.193607294329382, label: 1 },
  { x: 3.152802227590902, y: -6.4391938499312396, label: 1 },
  { x: 3.5261297660860684, y: -6.892986292284413, label: 1 },
  { x: 18.229355941606087, y: -8.60415891103748, label: 1 },
  { x: -17.568036673953536, y: 12.30944937505459, label: 0 },
  { x: -16.01389000241995, y: 12.043116324195003, label: 0 },
  { x: 25.914912554979775, y: 12.257396551475171, label: 1 },
  { x: 0.6997239082957778, y: 17.06508342252141, label: 0 },
  { x: 7.442145834869615, y: 13.904301948601512, label: 0 },
  { x: -0.1819959102939901, y: -0.7233551055353085, label: 1 },
  { x: 23.440810047821763, y: 10.232160136868899, label: 1 },
  { x: 5.4418282469998385, y: 14.707428065647585, label: 0 },
  { x: 7.811822401253771, y: 11.85561225921563, label: 0 },
  { x: 6.963797700720896, y: -7.832220946670789, label: 1 },
  { x: -16.585592368980755, y: 8.033223453613536, label: 0 },
  { x: -1.5475760823411893, y: 3.380506979224791, label: 1 },
  { x: 20.52608541062159, y: -4.339472329046026, label: 1 },
  { x: 8.082735272655892, y: 0.1584911330526495, label: 0 },
  { x: 0.06989302380702433, y: -6.4036920088094025, label: 1 },
  { x: -2.9292054115840847, y: -1.342873315168254, label: 1 },
  { x: -17.860385930827725, y: 15.406443257023936, label: 0 },
  { x: 4.924396661991038, y: -8.937647403799849, label: 1 },
  { x: -21.332128546191612, y: -0.03507582482811439, label: 0 },
  { x: 22.163481220878595, y: -4.857889486943003, label: 1 },
  { x: -19.107714321002266, y: -0.6406227476684312, label: 0 },
  { x: 22.284407579656666, y: -2.60469152436565, label: 1 },
  { x: -17.924646910650708, y: 2.9260103483410385, label: 0 },
  { x: 3.3315158753814504, y: 17.53554512642889, label: 0 },
  { x: 10.497548611233517, y: 6.176109618255139, label: 0 },
  { x: 0.9942510727578364, y: 14.581610767645653, label: 0 },
  { x: -3.5128773380826246, y: 1.9814061839608939, label: 1 },
  { x: -1.964986604084142, y: 18.800537553449665, label: 0 },
  { x: 24.72771731476986, y: 0.5348764716812127, label: 1 },
  { x: -17.97432206908611, y: 8.167464847574344, label: 0 },
  { x: 4.334719203162317, y: -4.889937934131386, label: 1 },
  { x: -7.7039763865599795, y: 23.664778379163852, label: 0 },
  { x: -0.919023114023755, y: -7.674830953611425, label: 1 },
  { x: 15.439088943586928, y: -4.703074521147019, label: 1 },
  { x: -1.0320560059987978, y: 17.41165985807668, label: 0 },
  { x: -4.561216704187508, y: -1.0230533586047785, label: 1 },
  { x: -6.734069218817518, y: -0.6189963913191543, label: 1 },
  { x: 7.492242651145608, y: 17.33836178745314, label: 0 },
  { x: 4.901362330429114, y: -9.831345916802462, label: 1 },
  { x: -4.912236646539734, y: 14.695993856900644, label: 1 },
  { x: -3.487926048632839, y: 4.979073483406261, label: 1 },
  { x: 9.66611385833094, y: 1.390271607365611, label: 0 },
  { x: -15.519922601604103, y: 13.107941849378848, label: 0 },
  { x: -6.18349247521782, y: 22.43785081258001, label: 0 },
  { x: 23.002818478584093, y: 6.789386170025951, label: 1 },
  { x: 25.5495032900943, y: 5.118985087657906, label: 1 },
  { x: -17.88490736414417, y: 8.378902464656402, label: 0 },
  { x: 14.623644174799537, y: -8.267760682730696, label: 1 },
  { x: 2.5587108958082956, y: 17.263580409800433, label: 0 },
  { x: 23.459038856858044, y: 3.654371581338686, label: 1 },
  { x: -8.925276683108034, y: 21.58805770022688, label: 0 },
  { x: 7.033687514698375, y: 14.018380461802234, label: 0 },
  { x: 5.0583415087518055, y: -7.52333387129419, label: 1 },
  { x: -4.164842620050164, y: 7.945185414183679, label: 1 },
  { x: -0.18150741789767455, y: 14.879367867125065, label: 0 },
  { x: 8.091585219516807, y: 9.164277502006923, label: 0 },
  { x: 27.140872993904907, y: 5.960936329584446, label: 1 },
  { x: 13.84193260076718, y: -8.574798716936545, label: 1 },
  { x: 9.747150222550438, y: 5.6468930551563625, label: 0 },
  { x: 4.0381288687986086, y: 17.013277462647164, label: 0 },
  { x: -2.437891059770512, y: -0.15020915895709613, label: 1 },
  { x: 9.472761499029117, y: 1.3056597056582295, label: 0 },
  { x: 5.776858473917493, y: 19.124962764084124, label: 0 },
  { x: 3.775548317155769, y: -10.329778390050649, label: 1 },
  { x: 9.672661808568584, y: -12.189749776045698, label: 1 },
  { x: -3.2363771099327936, y: 5.6994610701109885, label: 1 },
  { x: 6.346557467858169, y: -9.713789152735776, label: 1 },
  { x: 6.116040143168762, y: 9.78153194710318, label: 0 },
  { x: -11.258815649192313, y: 20.054711984844143, label: 0 },
  { x: -3.004756983027952, y: 5.282512462993424, label: 1 },
  { x: 7.687471891130993, y: -9.469123834170148, label: 1 },
  { x: 18.338663803921794, y: -5.575424892827811, label: 1 },
  { x: 11.731531507613383, y: -0.9547634611506417, label: 0 },
  { x: 23.996106970791143, y: 12.085664062534988, label: 1 },
  { x: 8.606959096056958, y: -6.736704728139737, label: 1 },
  { x: -14.537631670179465, y: 15.906111152636047, label: 0 },
  { x: -2.2024806468165528, y: -3.4317709813974586, label: 1 },
  { x: -9.754291850115239, y: 19.461601688754797, label: 0 },
  { x: -1.656247609295436, y: 19.873901072507646, label: 0 },
  { x: 14.062810236320171, y: -9.88091373412585, label: 1 },
  { x: 3.9434881513210858, y: 16.438282194692814, label: 0 },
  { x: -0.4417153732975576, y: 21.06505344159841, label: 0 },
  { x: -3.8087894393539967, y: 5.085741412255558, label: 1 },
  { x: 16.01836461135476, y: -8.883701690144303, label: 1 },
  { x: 12.424186718565302, y: -5.856114911321715, label: 1 },
  { x: 7.322740638214917, y: 17.88605900806489, label: 0 },
  { x: 6.012568841692056, y: 15.287998263288038, label: 0 },
  { x: 21.153257541215307, y: 2.4034823872801265, label: 1 },
  { x: 8.574664709767017, y: -12.647211430074712, label: 1 },
  { x: -16.069902386440752, y: 7.192553699119917, label: 0 },
  { x: -2.9630403258350055, y: 19.624969291903973, label: 0 },
  { x: 19.165822223481836, y: -4.710349452669006, label: 1 },
  { x: -2.6983061223539755, y: 22.890412769898106, label: 0 },
  { x: -18.761218900102286, y: 2.8954290315820725, label: 0 },
  { x: 12.02430590041142, y: -10.360871215593075, label: 1 },
  { x: -1.4846836923873652, y: 17.38135718716226, label: 0 },
  { x: 5.158089973960353, y: -8.85578421896536, label: 1 },
  { x: 10.345531575427382, y: 2.4585669360249756, label: 0 },
  { x: -8.489980232119514, y: 5.037384443203665, label: 1 },
  { x: -6.825515994648448, y: 19.765799372629736, label: 0 },
  { x: 2.8890839634995436, y: -6.715811495025489, label: 1 },
  { x: 24.62949870584833, y: -0.716280315059522, label: 1 },
  { x: 21.32126085881715, y: -5.561426669487066, label: 1 },
  { x: 21.491012900986536, y: 2.475085378166981, label: 1 },
  { x: -3.1713403213121794, y: 23.080224547313865, label: 0 },
  { x: -18.59698833982106, y: 10.733468406393563, label: 0 },
  { x: 2.4475666507149096, y: 21.72386511121212, label: 0 },
  { x: 9.80373900560195, y: 7.508736365196755, label: 0 },
  { x: -3.9961074117532194, y: 6.06582145888717, label: 1 },
  { x: -17.979360751117227, y: 5.3551360086378885, label: 0 },
  { x: -19.638315526940005, y: 9.185745846151473, label: 0 },
  { x: 23.412534505963038, y: -1.5797296733656074, label: 1 },
  { x: 21.968327502309954, y: -1.4974336263607477, label: 1 },
  { x: -21.847376421762533, y: 9.129346497933362, label: 0 },
  { x: 10.848325861314574, y: 4.748804101537878, label: 0 },
  { x: 9.041828490241176, y: 3.676879051871454, label: 0 },
  { x: -10.183877373988246, y: 21.76693611060975, label: 0 },
  { x: 20.93061107136296, y: -4.861528171707272, label: 1 },
  { x: 1.6691216540559415, y: -5.058586233302775, label: 1 },
  { x: 7.447673538698027, y: 6.94416143907811, label: 0 },
  { x: -14.832209718690084, y: 15.92123014125632, label: 0 },
  { x: 22.540027098773084, y: -6.683971750634237, label: 1 },
  { x: 2.731566918582576, y: -7.779674578461888, label: 1 },
  { x: 16.25650415688687, y: -6.019162049143699, label: 1 },
  { x: 24.228792703464478, y: -0.30531933807145945, label: 1 },
  { x: -8.148586282096087, y: 17.553919892023053, label: 0 },
  { x: -7.804747780135279, y: 18.84508614168145, label: 0 },
  { x: -5.854695413213839, y: 4.4757383578014736, label: 1 },
  { x: -7.389122761370906, y: 19.614416905650916, label: 0 },
  { x: 25.018289843132713, y: 3.533274153834754, label: 1 },
  { x: -9.15003147407031, y: 19.3611113346827, label: 0 },
  { x: -3.514387776608058, y: 22.386616928811808, label: 0 },
  { x: -17.818357914887862, y: 5.599675421442274, label: 0 },
  { x: 5.686178162755343, y: 13.522188527511812, label: 0 },
  { x: -9.35730378714769, y: 16.980123328223584, label: 0 },
  { x: 18.46723206486222, y: -9.521464903527757, label: 1 },
  { x: 23.691660529248292, y: 1.2095292317852269, label: 1 },
  { x: 2.1929578315032447, y: -7.891108502209725, label: 1 },
  { x: 0.8381077247486681, y: 20.38433219470047, label: 0 },
  { x: 12.077981211055302, y: -9.277266462835756, label: 1 },
  { x: 27.014611574231317, y: 1.3014809990648395, label: 1 },
  { x: 8.776689365278948, y: -1.1745250976127894, label: 0 },
  { x: -6.469107036692441, y: 19.841513764291772, label: 0 },
  { x: 8.170116593057996, y: -11.306229245703532, label: 1 },
  { x: 0.139308900752793, y: -6.993097531352452, label: 1 },
  { x: 11.04106283615278, y: -8.156218538917999, label: 1 },
  { x: -3.349082343776647, y: 9.406147656586993, label: 1 },
  { x: -21.310961179227647, y: -0.006591840654705121, label: 0 },
  { x: 0.45375344919180893, y: 2.3051306633652224, label: 1 },
  { x: -19.586275833551376, y: 10.597325479134112, label: 0 },
  { x: -16.10422710029094, y: 12.917079490970718, label: 0 },
  { x: 0.30280148275103347, y: -4.9824783044359, label: 1 },
  { x: 22.129333629597465, y: 11.882569156120947, label: 1 },
  { x: 7.1205902603902, y: 12.11288953816712, label: 0 },
  { x: 23.55325505264816, y: 2.6826103987185057, label: 1 },
  { x: -15.145454860514903, y: 14.270943425326337, label: 0 },
  { x: -5.301795792493743, y: 5.388072635156397, label: 1 },
  { x: 7.301022417771213, y: 7.505559843119745, label: 0 },
  { x: -23.385586085774428, y: 5.7754950588411536, label: 0 },
  { x: 22.664433766440595, y: -2.0279762460844726, label: 1 },
  { x: -4.613813569938651, y: 9.278676413145968, label: 1 },
];

const v3 = [
  { x: -30.0, y: 8.62766492478497, label: 0 },
  { x: -29.3, y: 9.16316848811804, label: 0 },
  { x: -28.6, y: 11.5421180555176, label: 0 },
  { x: -27.9, y: 12.7466031631227, label: 0 },
  { x: -27.2, y: 13.9325631529002, label: 0 },
  { x: -26.5, y: 9.48251720173925, label: 0 },
  { x: -25.8, y: 11.9714991808619, label: 0 },
  { x: -25.1, y: 14.2383478709161, label: 0 },
  { x: -24.4, y: 11.2886896328122, label: 0 },
  { x: -23.7, y: 13.8468635905957, label: 0 },
  { x: -23.0, y: 12.0377778744943, label: 0 },
  { x: -22.3, y: 9.50883492818702, label: 0 },
  { x: -21.6, y: 9.06582612598581, label: 0 },
  { x: -20.9, y: 8.65042352651599, label: 0 },
  { x: -20.2, y: 8.73345682540484, label: 0 },
  { x: -19.5, y: 6.13781061771109, label: 0 },
  { x: -18.8, y: 6.7873813376193, label: 0 },
  { x: -18.1, y: 3.21660783443133, label: 0 },
  { x: -17.4, y: -1.35765452063319, label: 0 },
  { x: -16.7, y: 5.30290530041774, label: 0 },
  { x: -16.0, y: 0.331025122302528, label: 0 },
  { x: -15.3, y: -1.01917050818276, label: 0 },
  { x: -14.6, y: -3.23444674908243, label: 0 },
  { x: -13.9, y: -3.83883340491536, label: 0 },
  { x: -13.2, y: -5.98665156646811, label: 0 },
  { x: -12.5, y: -5.73645238879705, label: 0 },
  { x: -11.8, y: -8.2188578756438, label: 0 },
  { x: -11.1, y: -9.30563996368897, label: 0 },
  { x: -10.4, y: -9.0990089800267, label: 0 },
  { x: -9.7, y: -10.8184069104162, label: 0 },
  { x: -9.0, y: -8.54331557535384, label: 0 },
  { x: -8.3, y: -13.218261269697, label: 0 },
  { x: -7.6, y: -12.789615540286, label: 0 },
  { x: -6.9, y: -13.4477739396056, label: 0 },
  { x: -6.2, y: -8.91075636239551, label: 0 },
  { x: -5.5, y: -10.7592694094497, label: 0 },
  { x: -4.8, y: -11.3945315045484, label: 0 },
  { x: -4.1, y: -10.1745568325238, label: 0 },
  { x: -3.4, y: -12.9568693840296, label: 0 },
  { x: -2.7, y: -10.001310452338, label: 0 },
  { x: -2.0, y: -8.78189423765081, label: 0 },
  { x: -1.3, y: -9.70865227295915, label: 0 },
  { x: -0.600000000000001, y: -11.1067668918592, label: 0 },
  { x: 0.0999999999999979, y: -11.5517404442981, label: 0 },
  { x: 0.799999999999997, y: -8.64012640572092, label: 0 },
  { x: 1.5, y: -2.67299753455812, label: 0 },
  { x: 2.2, y: -1.13665303930154, label: 0 },
  { x: 2.9, y: -6.60843357297119, label: 0 },
  { x: 3.59999999999999, y: -3.29879470853274, label: 0 },
  { x: 4.3, y: -4.13601449385261, label: 0 },
  { x: 5.0, y: -2.20746800121548, label: 0 },
  { x: 5.7, y: -1.32258635225543, label: 0 },
  { x: 6.4, y: -3.76648190012132, label: 0 },
  { x: 7.09999999999999, y: -1.1693445092675, label: 0 },
  { x: 7.8, y: -6.11345567200304, label: 0 },
  { x: 8.5, y: -6.63042210732532, label: 0 },
  { x: 9.2, y: -6.5021674388279, label: 0 },
  { x: 9.9, y: -2.47105076284402, label: 0 },
  { x: 10.6, y: -8.64523148615078, label: 0 },
  { x: 11.3, y: -1.61128022816513, label: 0 },
  { x: 12.0, y: -10.1524751289915, label: 0 },
  { x: 12.7, y: -15.5145014695794, label: 0 },
  { x: 13.4, y: -10.333999349902, label: 0 },
  { x: 14.1, y: -13.398865083868, label: 0 },
  { x: 14.8, y: -14.3365912535026, label: 0 },
  { x: 15.5, y: -13.1886705627616, label: 0 },
  { x: 16.2, y: -18.8658258612289, label: 0 },
  { x: 16.9, y: -15.4969821095768, label: 0 },
  { x: 17.6, y: -19.2768053696939, label: 0 },
  { x: 18.3, y: -19.3906666796631, label: 0 },
  { x: 19.0, y: -19.1133631719448, label: 0 },
  { x: 19.7, y: -21.1370436330569, label: 0 },
  { x: 20.4, y: -27.2932578860219, label: 0 },
  { x: 21.1, y: -24.2556800348661, label: 0 },
  { x: 21.8, y: -27.133135302492, label: 0 },
  { x: 22.5, y: -26.5689769628554, label: 0 },
  { x: 23.2, y: -28.4069376825672, label: 0 },
  { x: 23.9, y: -31.3748755213576, label: 0 },
  { x: 24.6, y: -27.1369715506741, label: 0 },
  { x: 25.3, y: -29.5727892323918, label: 0 },
  { x: 26.0, y: -26.9769188428258, label: 0 },
  { x: 26.7, y: -29.8673251308187, label: 0 },
  { x: 27.4, y: -28.3340901516435, label: 0 },
  { x: 28.1, y: -26.0204560969483, label: 0 },
  { x: 28.8, y: -26.1750528841165, label: 0 },
  { x: 29.5, y: -25.2584709307144, label: 0 },
  { x: -25.0, y: 20.9887987116938, label: 1 },
  { x: -24.5, y: 27.3525397716442, label: 1 },
  { x: -24.0, y: 26.1628513146162, label: 1 },
  { x: -23.5, y: 23.7069353103219, label: 1 },
  { x: -23.0, y: 24.0043680943765, label: 1 },
  { x: -22.5, y: 18.5259445415711, label: 1 },
  { x: -22.0, y: 21.4373788945545, label: 1 },
  { x: -21.5, y: 19.4769162772869, label: 1 },
  { x: -21.0, y: 17.1359933069791, label: 1 },
  { x: -20.5, y: 13.169025208023, label: 1 },
  { x: -20.0, y: 15.5808963220014, label: 1 },
  { x: -19.5, y: 15.6385293779773, label: 1 },
  { x: -19.0, y: 21.7697261375854, label: 1 },
  { x: -18.5, y: 16.2574427925855, label: 1 },
  { x: -18.0, y: 13.1784530814289, label: 1 },
  { x: -17.5, y: 13.6639081420219, label: 1 },
  { x: -17.0, y: 12.3244267142838, label: 1 },
  { x: -16.5, y: 13.7002251018425, label: 1 },
  { x: -16.0, y: 13.0631012691377, label: 1 },
  { x: -15.5, y: 13.5003359024049, label: 1 },
  { x: -15.0, y: 12.7166378074033, label: 1 },
  { x: -14.5, y: 6.32823393515926, label: 1 },
  { x: -14.0, y: 8.01060766872612, label: 1 },
  { x: -13.5, y: 9.25711299198198, label: 1 },
  { x: -13.0, y: 10.9960509842412, label: 1 },
  { x: -12.5, y: 6.52778817166107, label: 1 },
  { x: -12.0, y: 2.99052666743456, label: 1 },
  { x: -11.5, y: 8.32526094946608, label: 1 },
  { x: -11.0, y: 6.59223726106553, label: 1 },
  { x: -10.5, y: 6.02683922473988, label: 1 },
  { x: -10.0, y: 5.3627455460154, label: 1 },
  { x: -9.5, y: 10.5288098134724, label: 1 },
  { x: -9.0, y: 5.07311856638844, label: 1 },
  { x: -8.5, y: 8.71692850585919, label: 1 },
  { x: -8.0, y: 5.28270548486529, label: 1 },
  { x: -7.5, y: 1.31685969261157, label: 1 },
  { x: -7.0, y: 1.40425645165842, label: 1 },
  { x: -6.5, y: 5.18312001525566, label: 1 },
  { x: -6.0, y: 6.34647933076932, label: 1 },
  { x: -5.5, y: 1.07560468275035, label: 1 },
  { x: -5.0, y: -0.108584528620166, label: 1 },
  { x: -4.5, y: 1.80990167268583, label: 1 },
  { x: -4.0, y: 2.86332049884569, label: 1 },
  { x: -3.5, y: 5.8793422340558, label: 1 },
  { x: -3.0, y: 3.701560794719, label: 1 },
  { x: -2.5, y: -1.06946263140164, label: 1 },
  { x: -2.0, y: 1.02103814482827, label: 1 },
  { x: -1.5, y: 6.01148550461105, label: 1 },
  { x: -1.0, y: 1.96970167432271, label: 1 },
  { x: -0.5, y: 1.68929212444791, label: 1 },
  { x: 0.0, y: 2.14496775643292, label: 1 },
  { x: 0.5, y: 7.32981389002052, label: 1 },
  { x: 1.0, y: 3.40058771269259, label: 1 },
  { x: 1.5, y: 5.62852028097286, label: 1 },
  { x: 2.0, y: 2.99764512724432, label: 1 },
  { x: 2.5, y: 2.76766379471452, label: 1 },
  { x: 3.0, y: 8.43720369259424, label: 1 },
  { x: 3.5, y: 2.93124763905069, label: 1 },
  { x: 4.0, y: 8.5017620078499, label: 1 },
  { x: 4.5, y: 6.66597597151775, label: 1 },
  { x: 5.0, y: 8.13128253662079, label: 1 },
  { x: 5.5, y: -0.267530523826546, label: 1 },
  { x: 6.0, y: 6.61190021945945, label: 1 },
  { x: 6.5, y: 13.0976563624133, label: 1 },
  { x: 7.0, y: 4.89325763504395, label: 1 },
  { x: 7.5, y: 1.89396701789456, label: 1 },
  { x: 8.0, y: 3.36010401404557, label: 1 },
  { x: 8.5, y: 7.58743773878654, label: 1 },
  { x: 9.0, y: 8.26963444700966, label: 1 },
  { x: 9.5, y: 6.57261671257643, label: 1 },
  { x: 10.0, y: 4.9376926932071, label: 1 },
  { x: 10.5, y: 4.63487942593264, label: 1 },
  { x: 11.0, y: 11.266178193532, label: 1 },
  { x: 11.5, y: 4.74685644259773, label: 1 },
  { x: 12.0, y: 5.06280159583439, label: 1 },
  { x: 12.5, y: 2.26054431886195, label: 1 },
  { x: 13.0, y: 4.0202613275931, label: 1 },
  { x: 13.5, y: 9.35054814350259, label: 1 },
  { x: 14.0, y: 8.88831954012651, label: 1 },
  { x: 14.5, y: 8.79262913911797, label: 1 },
  { x: 15.0, y: 13.2736800546444, label: 1 },
  { x: 15.5, y: 10.5079614861155, label: 1 },
  { x: 16.0, y: 11.292375529113, label: 1 },
  { x: 16.5, y: 11.0953398300649, label: 1 },
  { x: 17.0, y: 7.43750759209541, label: 1 },
  { x: 17.5, y: 9.56537506873172, label: 1 },
  { x: 18.0, y: 12.9442333458985, label: 1 },
  { x: 18.5, y: 17.4699418649326, label: 1 },
  { x: 19.0, y: 16.2902704299637, label: 1 },
  { x: 19.5, y: 16.9250832984433, label: 1 },
  { x: 20.0, y: 24.0611778797811, label: 1 },
  { x: 20.5, y: 19.8444614487597, label: 1 },
  { x: 21.0, y: 20.6421497216666, label: 1 },
  { x: 21.5, y: 22.5586792764505, label: 1 },
  { x: 22.0, y: 15.5642486407206, label: 1 },
  { x: 22.5, y: 21.5060686525069, label: 1 },
  { x: 23.0, y: 20.3654442313475, label: 1 },
  { x: 23.5, y: 28.5846850220139, label: 1 },
  { x: 24.0, y: 28.0799242893052, label: 1 },
  { x: 24.5, y: 23.115684697273, label: 1 },
  { x: 25.0, y: 24.216957629499, label: 1 },
  { x: 6.96243352026592, y: 24.0952247049641, label: 2 },
  { x: -24.075744528405, y: -8.03477864412991, label: 2 },
  { x: -9.36980531038163, y: -27.1014497049146, label: 2 },
  { x: -6.64775308639275, y: 27.4669663320396, label: 2 },
  { x: -6.75697899234432, y: -19.6695582948431, label: 2 },
  { x: 1.1445422319869, y: -31.5582228467026, label: 2 },
  { x: 10.0203016644157, y: -23.6872175673616, label: 2 },
  { x: 20.282115587881, y: 16.5442464057592, label: 2 },
  { x: -9.16831305850973, y: -24.0836685410905, label: 2 },
  { x: 2.67841712392936, y: 29.3152461626391, label: 2 },
  { x: 4.38930468845903, y: 24.873048014987, label: 2 },
  { x: 4.9537731397278, y: -20.1007942228437, label: 2 },
  { x: 19.050275110682, y: -16.1043486114935, label: 2 },
  { x: 21.0032132116537, y: -13.9165911271184, label: 2 },
  { x: -18.6861401540062, y: -17.3188821694802, label: 2 },
  { x: -23.5913910538792, y: 12.7531165333194, label: 2 },
  { x: -6.49054968101815, y: -24.3835039887908, label: 2 },
  { x: -16.8169213605249, y: 8.38983687250835, label: 2 },
  { x: 22.7490779705865, y: -2.7068716937606, label: 2 },
  { x: -11.5835451133884, y: 23.1990572829153, label: 2 },
  { x: 25.2949029180473, y: -1.32566697784038, label: 2 },
  { x: 8.14618756982709, y: 24.1915119828847, label: 2 },
  { x: 11.7162734627184, y: 20.9839276408294, label: 2 },
  { x: -2.75886505512403, y: 28.0045730578747, label: 2 },
  { x: 25.9187191942817, y: -1.57592986562815, label: 2 },
  { x: 23.0705977328595, y: 7.91735451558536, label: 2 },
  { x: -8.55790321160353, y: -16.3247233759447, label: 2 },
  { x: 18.538562828999, y: 19.963104502636, label: 2 },
  { x: 0.320239146011775, y: -28.9311269523201, label: 2 },
  { x: 5.20450136768414, y: -25.9832679314338, label: 2 },
  { x: 23.4121312395705, y: -5.30377613615732, label: 2 },
  { x: -27.6267616068293, y: -1.96410021775629, label: 2 },
  { x: 22.9717539262481, y: -18.8103682478915, label: 2 },
  { x: 15.6520180718309, y: 23.6451680781592, label: 2 },
  { x: -1.92825703069262, y: 29.902601908328, label: 2 },
  { x: -9.149250505341, y: -21.6687176995985, label: 2 },
  { x: 28.3874373138924, y: -0.0818793051776692, label: 2 },
  { x: -14.8903404082411, y: -24.8705617150321, label: 2 },
  { x: -19.5899381282684, y: -7.94332215960943, label: 2 },
  { x: -26.4528960655531, y: -7.44609020238781, label: 2 },
  { x: -10.8764143722883, y: -22.6935803036342, label: 2 },
  { x: -25.6513082938123, y: 1.53342343716201, label: 2 },
  { x: -19.1206196988682, y: -17.9706797882191, label: 2 },
  { x: 25.110005926088, y: 3.58645814827176, label: 2 },
  { x: 2.36405830114754, y: -27.9459489690017, label: 2 },
  { x: 22.2748304519561, y: -12.554619731566, label: 2 },
  { x: 3.21996043829802, y: 23.3440370626755, label: 2 },
  { x: -12.9606014520531, y: 18.0322587655265, label: 2 },
  { x: -20.2666363054907, y: 18.9319330098611, label: 2 },
  { x: 25.2033261390286, y: -2.65133316782832, label: 2 },
  { x: -17.8471026694909, y: 12.9956415926423, label: 2 },
  { x: 14.6283988099723, y: -21.8700343462127, label: 2 },
  { x: 23.7387318835127, y: 10.5488607532578, label: 2 },
  { x: -24.3822962077941, y: -17.135459021156, label: 2 },
  { x: 25.6618798650086, y: 14.7855662881898, label: 2 },
  { x: -28.248294720144, y: -5.89315347532221, label: 2 },
  { x: 23.5390417304905, y: 0.84821088650093, label: 2 },
  { x: -27.4149817192212, y: 0.509437309158444, label: 2 },
  { x: -23.0631938692986, y: 8.19187910929329, label: 2 },
  { x: 26.1221758004105, y: -0.545246803958912, label: 2 },
  { x: 13.5160003136657, y: -17.8006727408978, label: 2 },
  { x: 21.2301936485038, y: -11.7285046426999, label: 2 },
  { x: 11.7143539972101, y: 23.3796140836177, label: 2 },
  { x: -10.644170022632, y: -20.9416180152449, label: 2 },
  { x: -6.14874146757771, y: -25.171577146796, label: 2 },
  { x: -23.4773796226649, y: 2.79607103621479, label: 2 },
  { x: 4.34819966742409, y: 22.9357582325611, label: 2 },
  { x: -22.4445636387788, y: -12.0198589943472, label: 2 },
  { x: 26.9886662687224, y: -4.85220318498096, label: 2 },
  { x: 21.0310492179703, y: -1.28994903835499, label: 2 },
  { x: -18.3091678257192, y: 22.347190978115, label: 2 },
  { x: -26.7024246472602, y: -10.3462049368372, label: 2 },
  { x: -0.474410433296041, y: 28.6809585058905, label: 2 },
  { x: -2.5168283018394, y: -20.5232355992026, label: 2 },
  { x: 20.3610570146621, y: 18.9273548707075, label: 2 },
  { x: 13.2143142400665, y: 18.6443669794868, label: 2 },
  { x: 7.48612098469858, y: -25.2446338125161, label: 2 },
  { x: -22.9447262579764, y: 9.89294041414475, label: 2 },
  { x: -25.2937994965509, y: -12.5508537997697, label: 2 },
  { x: -25.132624629146, y: -7.51710714275933, label: 2 },
  { x: -17.3706127690404, y: 12.3035549664363, label: 2 },
  { x: -11.0892218178639, y: 19.9852654269127, label: 2 },
  { x: -21.4869604244985, y: -3.74187182383114, label: 2 },
  { x: -21.6671913577085, y: 1.14807971066382, label: 2 },
  { x: -22.0036580096811, y: 5.78393081293953, label: 2 },
  { x: -18.4353433869046, y: -9.9677863639414, label: 2 },
  { x: 24.9161303183963, y: -5.42672007538614, label: 2 },
  { x: 23.9164277136145, y: -8.45061057522109, label: 2 },
  { x: -8.49887426865357, y: -16.6379624242665, label: 2 },
  { x: -10.6842947167313, y: -22.6663061294435, label: 2 },
  { x: 24.9242806495365, y: 12.6780670257986, label: 2 },
  { x: 22.1644458836854, y: -16.8873851015949, label: 2 },
  { x: 15.7772772745177, y: 21.9684237359457, label: 2 },
  { x: 12.3822988236757, y: 20.495124678742, label: 2 },
  { x: -16.3577535402161, y: -22.8577438480792, label: 2 },
  { x: -25.6542859088817, y: -7.83462432415849, label: 2 },
  { x: -23.2861139048406, y: 1.10825592908399, label: 2 },
  { x: -1.7442809208076, y: 30.1988704940819, label: 2 },
  { x: -4.5459071012739, y: 24.5057371099881, label: 2 },
  { x: 23.8878804881308, y: -3.05324889173901, label: 2 },
];
const MODEL_DATA = {
  [MODEL_VERSIONS.v1]: v1,
  [MODEL_VERSIONS.v2]: v2,
  [MODEL_VERSIONS.v3]: v3,
  [MODEL_VERSIONS.v4]: [], // No data for this model
};

export default MODEL_DATA;