'use strict';

/**
 * @ngdoc service
 * @name techShareApp.lodashFun
 * @description
 * # lodashFun
 * Service in the techShareApp.
 */
angular.module('techShareApp')
  .service('LodashFun', function () {

      var api = this;

      // generated using http://www.generatedata.com/
      var data_ = [
        {
          "Name":"Aileen Case",
          "Email":"vitae.diam.Proin@cubilia.net",
          "StreetAddress":"2777 Luctus Ave",
          "City":"Chattanooga",
          "State":"TN",
          "Zip":84552,
          "LatLong":"-83.36431, -75.4025"
        },
        {
          "Name":"Azalia Patel",
          "Email":"massa@euenim.ca",
          "StreetAddress":"3826 Blandit Ave",
          "City":"Milwaukee",
          "State":"WI",
          "Zip":85599,
          "LatLong":"56.93191, -168.05581"
        },
        {
          "Name":"Indigo Carrillo",
          "Email":"faucibus@eleifendvitaeerat.net",
          "StreetAddress":"Ap #258-1291 Congue, St.",
          "City":"Denver",
          "State":"CO",
          "Zip":18690,
          "LatLong":"48.90078, -34.76239"
        },
        {
          "Name":"Zephania Sosa",
          "Email":"Lorem@tortor.org",
          "StreetAddress":"P.O. Box 918, 641 Feugiat Street",
          "City":"Wilmington",
          "State":"DE",
          "Zip":74906,
          "LatLong":"58.5075, -138.3461"
        },
        {
          "Name":"Desiree Spears",
          "Email":"vel@primis.org",
          "StreetAddress":"P.O. Box 978, 7460 Duis Avenue",
          "City":"Grand Island",
          "State":"NE",
          "Zip":55890,
          "LatLong":"64.214, 118.02607"
        },
        {
          "Name":"Desiree Hester",
          "Email":"taciti.sociosqu@dictummiac.net",
          "StreetAddress":"693-4544 Dignissim Road",
          "City":"Juneau",
          "State":"AK",
          "Zip":99586,
          "LatLong":"0.68014, 138.21091"
        },
        {
          "Name":"Dora Melendez",
          "Email":"risus.at.fringilla@arcuimperdiet.org",
          "StreetAddress":"P.O. Box 796, 574 Sed St.",
          "City":"Rock Springs",
          "State":"WY",
          "Zip":70385,
          "LatLong":"-63.54661, 26.27814"
        },
        {
          "Name":"Lynn Cochran",
          "Email":"turpis.egestas@et.edu",
          "StreetAddress":"856-1749 Lorem Rd.",
          "City":"Jefferson City",
          "State":"MO",
          "Zip":35713,
          "LatLong":"-55.74096, -68.96909"
        },
        {
          "Name":"Madison Byrd",
          "Email":"eget.metus@hendreritaarcu.org",
          "StreetAddress":"P.O. Box 985, 961 Tellus Av.",
          "City":"Portland",
          "State":"ME",
          "Zip":72076,
          "LatLong":"-49.66138, 124.21948"
        },
        {
          "Name":"Madaline Erickson",
          "Email":"Cras@vehiculaPellentesque.ca",
          "StreetAddress":"P.O. Box 998, 5503 Luctus St.",
          "City":"Chandler",
          "State":"AZ",
          "Zip":86535,
          "LatLong":"15.76825, -174.97073"
        },
        {
          "Name":"Cameron Curry",
          "Email":"montes.nascetur@Donecnonjusto.org",
          "StreetAddress":"6755 Lectus Av.",
          "City":"Tulsa",
          "State":"OK",
          "Zip":45361,
          "LatLong":"23.8039, 40.6081"
        },
        {
          "Name":"Gareth Reid",
          "Email":"ipsum@interdumligula.ca",
          "StreetAddress":"Ap #667-3948 Eget Av.",
          "City":"Boston",
          "State":"MA",
          "Zip":70379,
          "LatLong":"6.14912, -125.56635"
        },
        {
          "Name":"Lance Slater",
          "Email":"lectus.ante@lobortis.net",
          "StreetAddress":"648-6457 Convallis Ave",
          "City":"Broken Arrow",
          "State":"OK",
          "Zip":24619,
          "LatLong":"35.98829, 90.85663"
        },
        {
          "Name":"Rafael Compton",
          "Email":"ac.sem@neque.com",
          "StreetAddress":"1470 Amet St.",
          "City":"Fairbanks",
          "State":"AK",
          "Zip":99881,
          "LatLong":"-68.67645, -20.33775"
        },
        {
          "Name":"Bethany Hale",
          "Email":"convallis.ligula.Donec@semper.net",
          "StreetAddress":"1854 Bibendum Ave",
          "City":"Aurora",
          "State":"IL",
          "Zip":66662,
          "LatLong":"61.80695, 4.90889"
        },
        {
          "Name":"Upton Carr",
          "Email":"sed.leo@parturient.com",
          "StreetAddress":"Ap #575-2018 Eu Avenue",
          "City":"Aurora",
          "State":"CO",
          "Zip":99958,
          "LatLong":"-82.17717, 150.87716"
        },
        {
          "Name":"Aaron Clark",
          "Email":"arcu.Curabitur.ut@diamatpretium.org",
          "StreetAddress":"880-1410 Nisl. Ave",
          "City":"Hartford",
          "State":"CT",
          "Zip":93742,
          "LatLong":"61.44391, -22.3996"
        },
        {
          "Name":"Hunter Alexander",
          "Email":"eu.tempor@gravida.org",
          "StreetAddress":"462-8514 A Avenue",
          "City":"San Diego",
          "State":"CA",
          "Zip":90185,
          "LatLong":"-11.43634, -62.95952"
        },
        {
          "Name":"Maxine Baird",
          "Email":"natoque@liberoMorbiaccumsan.edu",
          "StreetAddress":"3655 Nec, Rd.",
          "City":"Gaithersburg",
          "State":"MD",
          "Zip":62885,
          "LatLong":"-23.21565, 79.13118"
        },
        {
          "Name":"Kelsie Hopkins",
          "Email":"Sed.nunc.est@Vivamus.net",
          "StreetAddress":"P.O. Box 376, 3626 Metus Road",
          "City":"Gaithersburg",
          "State":"MD",
          "Zip":58978,
          "LatLong":"29.95379, 103.37082"
        },
        {
          "Name":"Elizabeth Freeman",
          "Email":"Cum.sociis@vellectusCum.org",
          "StreetAddress":"825-3414 Mus. St.",
          "City":"Richmond",
          "State":"VA",
          "Zip":85421,
          "LatLong":"-10.50398, -33.37711"
        },
        {
          "Name":"Joan Barry",
          "Email":"Vestibulum@Nunclaoreet.net",
          "StreetAddress":"P.O. Box 563, 6747 Purus, Rd.",
          "City":"Gary",
          "State":"IN",
          "Zip":35030,
          "LatLong":"33.94166, 69.90204"
        },
        {
          "Name":"Yuri Ramirez",
          "Email":"diam.luctus.lobortis@scelerisque.com",
          "StreetAddress":"8698 Torquent Ave",
          "City":"Wichita",
          "State":"KS",
          "Zip":21464,
          "LatLong":"32.19375, -157.2456"
        },
        {
          "Name":"Ann Rivas",
          "Email":"iaculis@dictum.edu",
          "StreetAddress":"Ap #169-8851 Mauris Ave",
          "City":"Madison",
          "State":"WI",
          "Zip":35099,
          "LatLong":"-49.44026, 130.15103"
        },
        {
          "Name":"Athena Carter",
          "Email":"sociis.natoque.penatibus@Maurisvestibulumneque.ca",
          "StreetAddress":"P.O. Box 329, 5038 Tellus Avenue",
          "City":"Columbia",
          "State":"MO",
          "Zip":27566,
          "LatLong":"82.36755, -133.99492"
        },
        {
          "Name":"Kyle Humphrey",
          "Email":"aliquet.libero.Integer@lobortis.ca",
          "StreetAddress":"560-7900 Mauris. St.",
          "City":"Knoxville",
          "State":"TN",
          "Zip":71881,
          "LatLong":"-14.72256, -171.62963"
        },
        {
          "Name":"Martina Carver",
          "Email":"mi@enimEtiamimperdiet.net",
          "StreetAddress":"489-9854 Fermentum St.",
          "City":"Cleveland",
          "State":"OH",
          "Zip":31021,
          "LatLong":"89.18381, -166.60544"
        },
        {
          "Name":"Jasper Mills",
          "Email":"ac@ametfaucibusut.org",
          "StreetAddress":"Ap #495-1525 Lectus Rd.",
          "City":"Oklahoma City",
          "State":"OK",
          "Zip":74389,
          "LatLong":"0.66579, 97.15427"
        },
        {
          "Name":"Louis Vega",
          "Email":"auctor@ipsumCurabitur.org",
          "StreetAddress":"434-1304 Odio, Rd.",
          "City":"Erie",
          "State":"PA",
          "Zip":99892,
          "LatLong":"42.3571, 88.51263"
        },
        {
          "Name":"Blair Crane",
          "Email":"lectus.rutrum.urna@lacusCras.com",
          "StreetAddress":"Ap #586-9190 Et Street",
          "City":"Billings",
          "State":"MT",
          "Zip":28829,
          "LatLong":"-23.56689, 128.74618"
        },
        {
          "Name":"Stewart Keller",
          "Email":"vel@purusin.co.uk",
          "StreetAddress":"5264 Elit Ave",
          "City":"Metairie",
          "State":"LA",
          "Zip":68689,
          "LatLong":"-82.88181, -160.44306"
        },
        {
          "Name":"Casey Workman",
          "Email":"id.libero.Donec@sociosqu.edu",
          "StreetAddress":"P.O. Box 343, 7918 Congue Ave",
          "City":"Cincinnati",
          "State":"OH",
          "Zip":15639,
          "LatLong":"6.87552, 99.09469"
        },
        {
          "Name":"Acton Mcbride",
          "Email":"Aliquam@Quisqueimperdieterat.co.uk",
          "StreetAddress":"P.O. Box 881, 825 In Road",
          "City":"Montgomery",
          "State":"AL",
          "Zip":35753,
          "LatLong":"-21.41227, 63.349"
        },
        {
          "Name":"Julie Griffith",
          "Email":"rutrum.eu.ultrices@ut.org",
          "StreetAddress":"396-7739 Integer Av.",
          "City":"Stamford",
          "State":"CT",
          "Zip":96522,
          "LatLong":"30.53881, 138.48931"
        },
        {
          "Name":"Halla Floyd",
          "Email":"aliquam@commodo.org",
          "StreetAddress":"Ap #166-174 Ipsum Rd.",
          "City":"Sioux City",
          "State":"IA",
          "Zip":81973,
          "LatLong":"78.72641, 59.32511"
        },
        {
          "Name":"Nomlanga Silva",
          "Email":"sem.vitae.aliquam@duiaugueeu.co.uk",
          "StreetAddress":"Ap #898-394 Malesuada Ave",
          "City":"West Jordan",
          "State":"UT",
          "Zip":84202,
          "LatLong":"-13.55342, -116.39129"
        },
        {
          "Name":"Amos Grimes",
          "Email":"est.congue.a@tellus.edu",
          "StreetAddress":"416-1230 Aptent Av.",
          "City":"Fort Wayne",
          "State":"IN",
          "Zip":30960,
          "LatLong":"-0.95663, -172.75178"
        },
        {
          "Name":"Francesca Chapman",
          "Email":"mattis.velit.justo@sedpedenec.net",
          "StreetAddress":"207-6893 Eu Av.",
          "City":"Boise",
          "State":"ID",
          "Zip":26476,
          "LatLong":"73.59516, 22.65773"
        },
        {
          "Name":"Jolie Mason",
          "Email":"Mauris.non.dui@nequenonquam.com",
          "StreetAddress":"Ap #289-2778 Eros. Street",
          "City":"Bellevue",
          "State":"NE",
          "Zip":53649,
          "LatLong":"9.64395, 141.71788"
        },
        {
          "Name":"Allistair Hogan",
          "Email":"Nunc.commodo@atvelitCras.net",
          "StreetAddress":"Ap #867-8512 Donec Rd.",
          "City":"Glendale",
          "State":"AZ",
          "Zip":86054,
          "LatLong":"-48.60441, -24.69053"
        },
        {
          "Name":"Elmo Conway",
          "Email":"nunc.Quisque.ornare@loremvitae.org",
          "StreetAddress":"P.O. Box 212, 8027 Et Av.",
          "City":"Lawton",
          "State":"OK",
          "Zip":35070,
          "LatLong":"-63.90595, 171.89237"
        },
        {
          "Name":"Scarlet Horton",
          "Email":"ipsum.non@velquamdignissim.com",
          "StreetAddress":"P.O. Box 498, 3339 Ipsum. Road",
          "City":"Juneau",
          "State":"AK",
          "Zip":99596,
          "LatLong":"86.7311, 134.21909"
        },
        {
          "Name":"Macy Guthrie",
          "Email":"faucibus.id.libero@dolordolortempus.edu",
          "StreetAddress":"P.O. Box 357, 8938 Nulla Rd.",
          "City":"Springfield",
          "State":"MO",
          "Zip":84727,
          "LatLong":"79.50309, 79.50982"
        },
        {
          "Name":"Odette Harrell",
          "Email":"eu@molestieintempus.edu",
          "StreetAddress":"5346 Sagittis Av.",
          "City":"Hillsboro",
          "State":"OR",
          "Zip":22205,
          "LatLong":"-32.75048, -103.40445"
        },
        {
          "Name":"Ann Trujillo",
          "Email":"quam.elementum@magna.ca",
          "StreetAddress":"5649 Pede. Av.",
          "City":"Kansas City",
          "State":"KS",
          "Zip":94462,
          "LatLong":"78.228, 133.3226"
        },
        {
          "Name":"Griffin Savage",
          "Email":"ipsum.Phasellus.vitae@blanditviverra.org",
          "StreetAddress":"910-3575 Felis. Av.",
          "City":"Fresno",
          "State":"CA",
          "Zip":92193,
          "LatLong":"3.65514, -16.24904"
        },
        {
          "Name":"Kitra Whitaker",
          "Email":"egestas.urna@lectus.co.uk",
          "StreetAddress":"Ap #855-6532 Sed Road",
          "City":"Madison",
          "State":"WI",
          "Zip":73467,
          "LatLong":"-38.07782, -128.21228"
        },
        {
          "Name":"Robert Hinton",
          "Email":"ut@Crasvulputate.co.uk",
          "StreetAddress":"Ap #537-8108 Iaculis Rd.",
          "City":"Pittsburgh",
          "State":"PA",
          "Zip":60044,
          "LatLong":"4.46444, 122.17916"
        },
        {
          "Name":"Noelle Mendoza",
          "Email":"Proin.vel.arcu@luctussit.com",
          "StreetAddress":"P.O. Box 139, 7744 Ac Road",
          "City":"Honolulu",
          "State":"HI",
          "Zip":79009,
          "LatLong":"41.66164, 0.35323"
        },
        {
          "Name":"Driscoll Sweet",
          "Email":"bibendum@neque.net",
          "StreetAddress":"Ap #137-2718 Scelerisque St.",
          "City":"Meridian",
          "State":"ID",
          "Zip":69075,
          "LatLong":"32.0968, 100.62319"
        },
        {
          "Name":"Scarlet Hull",
          "Email":"eget.varius@cursusnonegestas.net",
          "StreetAddress":"7298 Et Road",
          "City":"Lexington",
          "State":"KY",
          "Zip":88775,
          "LatLong":"89.71137, 85.09439"
        },
        {
          "Name":"Nolan Clemons",
          "Email":"facilisis.lorem@quamafelis.org",
          "StreetAddress":"Ap #494-2673 Nec Road",
          "City":"Rockville",
          "State":"MD",
          "Zip":82900,
          "LatLong":"64.37239, 87.35453"
        },
        {
          "Name":"Hector Brown",
          "Email":"consequat.purus.Maecenas@felisorciadipiscing.com",
          "StreetAddress":"6999 Nisl St.",
          "City":"Dallas",
          "State":"TX",
          "Zip":96460,
          "LatLong":"67.23578, -10.13585"
        },
        {
          "Name":"Bruno Rasmussen",
          "Email":"ut@tinciduntorci.co.uk",
          "StreetAddress":"Ap #293-6037 Quisque Ave",
          "City":"Reno",
          "State":"NV",
          "Zip":30479,
          "LatLong":"75.7249, -69.79139"
        },
        {
          "Name":"Adara Mcpherson",
          "Email":"vulputate@liberoDonec.org",
          "StreetAddress":"676-1137 Arcu. Rd.",
          "City":"Springdale",
          "State":"AR",
          "Zip":72034,
          "LatLong":"74.43562, -155.67102"
        },
        {
          "Name":"Devin Swanson",
          "Email":"euismod@lectus.com",
          "StreetAddress":"P.O. Box 538, 9893 Eleifend. Rd.",
          "City":"Knoxville",
          "State":"TN",
          "Zip":52624,
          "LatLong":"-44.92042, -94.58945"
        },
        {
          "Name":"Cameran Bryant",
          "Email":"ante.Nunc@Aliquamerat.ca",
          "StreetAddress":"P.O. Box 677, 1140 Ornare, Road",
          "City":"Augusta",
          "State":"ME",
          "Zip":44799,
          "LatLong":"-28.2819, 102.40152"
        },
        {
          "Name":"Wade Jennings",
          "Email":"euismod.et@Utsagittislobortis.net",
          "StreetAddress":"593-6390 Cursus St.",
          "City":"Louisville",
          "State":"KY",
          "Zip":74952,
          "LatLong":"-21.61857, 175.09787"
        },
        {
          "Name":"Leigh Dunn",
          "Email":"id.risus.quis@auctor.co.uk",
          "StreetAddress":"6750 In St.",
          "City":"Spokane",
          "State":"WA",
          "Zip":46852,
          "LatLong":"47.08357, 110.00067"
        },
        {
          "Name":"Dale Hunt",
          "Email":"malesuada.fames@adipiscingenimmi.net",
          "StreetAddress":"Ap #790-4922 Vivamus Avenue",
          "City":"Knoxville",
          "State":"TN",
          "Zip":54782,
          "LatLong":"27.92645, -168.97409"
        },
        {
          "Name":"Celeste Mcleod",
          "Email":"tempus@laoreet.net",
          "StreetAddress":"8665 Pharetra, St.",
          "City":"Little Rock",
          "State":"AR",
          "Zip":72041,
          "LatLong":"-23.98334, -172.38663"
        },
        {
          "Name":"Clarke Harmon",
          "Email":"ultricies.dignissim.lacus@bibendum.org",
          "StreetAddress":"649 Eu St.",
          "City":"South Bend",
          "State":"IN",
          "Zip":36346,
          "LatLong":"-70.06888, 51.00555"
        },
        {
          "Name":"Kiona Cantu",
          "Email":"diam.luctus.lobortis@metusfacilisislorem.com",
          "StreetAddress":"P.O. Box 693, 7784 Neque St.",
          "City":"West Jordan",
          "State":"UT",
          "Zip":76369,
          "LatLong":"-76.31923, 75.71486"
        },
        {
          "Name":"Lila Kennedy",
          "Email":"sit@dignissim.org",
          "StreetAddress":"231-8250 Purus Rd.",
          "City":"Nashville",
          "State":"TN",
          "Zip":57762,
          "LatLong":"24.17335, 166.67973"
        },
        {
          "Name":"Chiquita Lee",
          "Email":"Mauris.blandit.enim@ut.com",
          "StreetAddress":"920-3011 Commodo Ave",
          "City":"Gillette",
          "State":"WY",
          "Zip":96396,
          "LatLong":"-62.5896, -106.9931"
        },
        {
          "Name":"Hermione Cruz",
          "Email":"vitae.nibh.Donec@nonlobortisquis.net",
          "StreetAddress":"Ap #528-1165 Lectus, Av.",
          "City":"Owensboro",
          "State":"KY",
          "Zip":37455,
          "LatLong":"69.07461, 90.90689"
        },
        {
          "Name":"Maris May",
          "Email":"dolor.egestas@dictumultricies.edu",
          "StreetAddress":"919-2225 Sed Street",
          "City":"Burlington",
          "State":"VT",
          "Zip":85014,
          "LatLong":"-49.33794, 149.03988"
        },
        {
          "Name":"Yasir Vazquez",
          "Email":"non@risus.co.uk",
          "StreetAddress":"Ap #316-9819 Urna. Av.",
          "City":"Pike Creek",
          "State":"DE",
          "Zip":99449,
          "LatLong":"-43.73669, -22.53121"
        },
        {
          "Name":"Claudia King",
          "Email":"at.egestas@atauctor.net",
          "StreetAddress":"148-2154 Sit Road",
          "City":"Hartford",
          "State":"CT",
          "Zip":93886,
          "LatLong":"-22.09305, -156.47584"
        },
        {
          "Name":"Galena Scott",
          "Email":"Nam.tempor.diam@porta.ca",
          "StreetAddress":"P.O. Box 304, 7560 Porttitor Ave",
          "City":"Jacksonville",
          "State":"FL",
          "Zip":92683,
          "LatLong":"67.56385, 132.22289"
        },
        {
          "Name":"Brian Wilkinson",
          "Email":"Aliquam.rutrum@Curabituregestasnunc.co.uk",
          "StreetAddress":"5168 Dapibus Ave",
          "City":"Warren",
          "State":"MI",
          "Zip":39288,
          "LatLong":"35.14237, -142.11276"
        },
        {
          "Name":"Dexter Knox",
          "Email":"mauris.sapien@Sedidrisus.com",
          "StreetAddress":"769-2083 At Road",
          "City":"Aurora",
          "State":"IL",
          "Zip":36810,
          "LatLong":"-17.89291, -87.93125"
        },
        {
          "Name":"Amity Small",
          "Email":"neque@augue.net",
          "StreetAddress":"Ap #285-5001 Egestas Road",
          "City":"Augusta",
          "State":"GA",
          "Zip":59176,
          "LatLong":"-50.76067, -102.3619"
        },
        {
          "Name":"Kuame Chaney",
          "Email":"mauris@velitegestaslacinia.edu",
          "StreetAddress":"P.O. Box 831, 1220 Fames St.",
          "City":"Worcester",
          "State":"MA",
          "Zip":76648,
          "LatLong":"-67.06413, -84.25076"
        },
        {
          "Name":"Deborah Todd",
          "Email":"enim.non.nisi@ut.co.uk",
          "StreetAddress":"1737 Sagittis Road",
          "City":"Wichita",
          "State":"KS",
          "Zip":46855,
          "LatLong":"-68.65344, 45.18768"
        },
        {
          "Name":"Ignatius Dudley",
          "Email":"Donec.feugiat@actellus.net",
          "StreetAddress":"8222 Turpis. Av.",
          "City":"Phoenix",
          "State":"AZ",
          "Zip":86744,
          "LatLong":"61.24375, 127.35076"
        },
        {
          "Name":"Wesley Harris",
          "Email":"erat.Etiam.vestibulum@viverra.org",
          "StreetAddress":"963-5954 Erat St.",
          "City":"Reno",
          "State":"NV",
          "Zip":43496,
          "LatLong":"56.86993, 17.51195"
        },
        {
          "Name":"Phoebe Carr",
          "Email":"in@nibh.org",
          "StreetAddress":"P.O. Box 841, 1846 Vestibulum St.",
          "City":"Juneau",
          "State":"AK",
          "Zip":99763,
          "LatLong":"66.06329, -95.01385"
        },
        {
          "Name":"Lesley Rosales",
          "Email":"Suspendisse.sed@rutrum.com",
          "StreetAddress":"8864 Ac Rd.",
          "City":"Bellevue",
          "State":"WA",
          "Zip":18840,
          "LatLong":"57.01075, 117.90002"
        },
        {
          "Name":"Amity Mccormick",
          "Email":"dui.nec.tempus@sapienCrasdolor.ca",
          "StreetAddress":"753-9385 Malesuada St.",
          "City":"Colorado Springs",
          "State":"CO",
          "Zip":54243,
          "LatLong":"32.55391, -75.43629"
        },
        {
          "Name":"Evan Mcpherson",
          "Email":"mollis.Phasellus.libero@Donecnibh.edu",
          "StreetAddress":"Ap #904-7381 Nunc Rd.",
          "City":"Denver",
          "State":"CO",
          "Zip":49795,
          "LatLong":"-21.45581, 123.06245"
        },
        {
          "Name":"Rae Holden",
          "Email":"est.ac@taciti.ca",
          "StreetAddress":"P.O. Box 977, 218 Scelerisque Avenue",
          "City":"Boise",
          "State":"ID",
          "Zip":68789,
          "LatLong":"-31.93616, 163.66333"
        },
        {
          "Name":"Ferris Mcpherson",
          "Email":"vitae@idlibero.net",
          "StreetAddress":"7054 Adipiscing, Rd.",
          "City":"Seattle",
          "State":"WA",
          "Zip":29232,
          "LatLong":"53.95092, 30.01585"
        },
        {
          "Name":"Aubrey Tucker",
          "Email":"iaculis.enim.sit@libero.net",
          "StreetAddress":"Ap #116-1108 Sed St.",
          "City":"Kaneohe",
          "State":"HI",
          "Zip":96251,
          "LatLong":"-46.35897, -24.78679"
        },
        {
          "Name":"Dale Kidd",
          "Email":"Mauris.ut@nonummyut.com",
          "StreetAddress":"Ap #699-6049 Nulla Av.",
          "City":"Topeka",
          "State":"KS",
          "Zip":82258,
          "LatLong":"-42.39836, -31.34943"
        },
        {
          "Name":"Camille Barton",
          "Email":"facilisis.vitae.orci@gravidaPraesenteu.net",
          "StreetAddress":"256-9367 Amet, Road",
          "City":"Salt Lake City",
          "State":"UT",
          "Zip":43364,
          "LatLong":"85.67606, 125.78256"
        },
        {
          "Name":"Chadwick Murphy",
          "Email":"tortor@milorem.edu",
          "StreetAddress":"897-4971 Sem. St.",
          "City":"College",
          "State":"AK",
          "Zip":99761,
          "LatLong":"-65.65425, -149.64524"
        },
        {
          "Name":"Tanisha Short",
          "Email":"sem.consequat.nec@velitCraslorem.net",
          "StreetAddress":"9429 Quam Rd.",
          "City":"Hattiesburg",
          "State":"MS",
          "Zip":34011,
          "LatLong":"-73.87952, 118.96085"
        },
        {
          "Name":"Fatima Bridges",
          "Email":"et.magnis@etlibero.org",
          "StreetAddress":"P.O. Box 812, 5779 Libero. Avenue",
          "City":"Little Rock",
          "State":"AR",
          "Zip":72958,
          "LatLong":"-24.38083, -46.29"
        },
        {
          "Name":"Kirby Merritt",
          "Email":"scelerisque.neque@ultricesiaculis.com",
          "StreetAddress":"4610 Donec St.",
          "City":"Lewiston",
          "State":"ME",
          "Zip":85017,
          "LatLong":"-18.65155, 37.78413"
        },
        {
          "Name":"Kay Moody",
          "Email":"in@lobortisquis.org",
          "StreetAddress":"P.O. Box 992, 613 A Av.",
          "City":"Boston",
          "State":"MA",
          "Zip":37462,
          "LatLong":"-80.48276, -67.48916"
        },
        {
          "Name":"Emi Kline",
          "Email":"non.feugiat@purusin.org",
          "StreetAddress":"565-5209 Accumsan Avenue",
          "City":"St. Petersburg",
          "State":"FL",
          "Zip":78109,
          "LatLong":"59.06155, -129.08144"
        },
        {
          "Name":"Omar Acevedo",
          "Email":"lectus.pede.et@Mauris.ca",
          "StreetAddress":"647-1883 In Avenue",
          "City":"Saint Paul",
          "State":"MN",
          "Zip":78755,
          "LatLong":"-62.71134, -102.58209"
        },
        {
          "Name":"Howard Tanner",
          "Email":"turpis.egestas@Phasellus.net",
          "StreetAddress":"4222 Mollis. Ave",
          "City":"Milwaukee",
          "State":"WI",
          "Zip":59811,
          "LatLong":"82.0788, -156.06436"
        },
        {
          "Name":"Amal Kent",
          "Email":"diam@sagittissemperNam.edu",
          "StreetAddress":"229-5080 Ipsum Road",
          "City":"Olympia",
          "State":"WA",
          "Zip":31570,
          "LatLong":"27.41526, 98.33086"
        },
        {
          "Name":"Martha Barrett",
          "Email":"dolor.Nulla@Nunclectus.edu",
          "StreetAddress":"489-8368 Mi Rd.",
          "City":"San Francisco",
          "State":"CA",
          "Zip":91130,
          "LatLong":"-47.54798, 38.90701"
        },
        {
          "Name":"Owen Oneill",
          "Email":"sit.amet.ultricies@nuncsedpede.ca",
          "StreetAddress":"P.O. Box 973, 1883 Aliquam Ave",
          "City":"Saint Louis",
          "State":"MO",
          "Zip":37998,
          "LatLong":"24.67974, -95.01514"
        },
        {
          "Name":"Hollee Horne",
          "Email":"lacus@Inornaresagittis.com",
          "StreetAddress":"1112 Phasellus Rd.",
          "City":"Great Falls",
          "State":"MT",
          "Zip":52767,
          "LatLong":"60.72401, 79.71414"
        },
        {
          "Name":"Cairo Juarez",
          "Email":"amet.dapibus.id@loremsit.co.uk",
          "StreetAddress":"P.O. Box 525, 4162 Feugiat. Street",
          "City":"Atlanta",
          "State":"GA",
          "Zip":37885,
          "LatLong":"-3.11304, 58.03207"
        },
        {
          "Name":"Kirsten Burris",
          "Email":"Cras.convallis@Nullaeuneque.ca",
          "StreetAddress":"P.O. Box 524, 2329 Vestibulum Rd.",
          "City":"Fresno",
          "State":"CA",
          "Zip":94236,
          "LatLong":"9.52829, 135.99866"
        }
      ];

      function getAll() {
        return data_;
      }

      api.getAll = getAll;
  });
