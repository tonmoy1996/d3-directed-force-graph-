import './App.css';

import LinkAnalysis from './LinkAnalysis'
import {useState} from "react"
import ForceGraph3dComponent  from "./ForceGraph3dComponent";

function App() {
    const [data, setData] = useState({
        "links": [
            {
                "duration": 115,
                "key": 0,
                "numberOfEvents": 2,
                "source": "8801611045417",
                "target": "8801714031499"
            },
            {
                "duration": 335,
                "key": 0,
                "numberOfEvents": 9,
                "source": "8801714031499",
                "target": "8801611045417"
            },
            {
                "duration": 506,
                "key": 0,
                "numberOfEvents": 6,
                "source": "8801714031499",
                "target": "8801617666206"
            },
            {
                "duration": 690,
                "key": 0,
                "numberOfEvents": 6,
                "source": "8801714031499",
                "target": "8801874882333"
            },
            {
                "duration": 382,
                "key": 0,
                "numberOfEvents": 7,
                "source": "8801714031499",
                "target": "8801620226650"
            },
            {
                "duration": 251,
                "key": 0,
                "numberOfEvents": 9,
                "source": "8801714031499",
                "target": "8801673985481"
            },
            {
                "duration": 690,
                "key": 0,
                "numberOfEvents": 6,
                "source": "8801714031499",
                "target": "8801676036818"
            },
            {
                "duration": 820,
                "key": 0,
                "numberOfEvents": 35,
                "source": "8801714031499",
                "target": "8801707538889"
            },
            {
                "duration": 920,
                "key": 0,
                "numberOfEvents": 12,
                "source": "8801714031499",
                "target": "8801711233474"
            },
            {
                "duration": 543,
                "key": 0,
                "numberOfEvents": 16,
                "source": "8801714031499",
                "target": "8801711676989"
            },
            {
                "duration": 108,
                "key": 0,
                "numberOfEvents": 5,
                "source": "8801714031499",
                "target": "8801711988101"
            },
            {
                "duration": 1953,
                "key": 0,
                "numberOfEvents": 18,
                "source": "8801714031499",
                "target": "8801712121684"
            },
            {
                "duration": 357,
                "key": 0,
                "numberOfEvents": 8,
                "source": "8801714031499",
                "target": "8801715117005"
            },
            {
                "duration": 935,
                "key": 0,
                "numberOfEvents": 11,
                "source": "8801714031499",
                "target": "8801715429078"
            },
            {
                "duration": 65,
                "key": 0,
                "numberOfEvents": 2,
                "source": "8801714031499",
                "target": "8801715908675"
            },
            {
                "duration": 294,
                "key": 0,
                "numberOfEvents": 7,
                "source": "8801714031499",
                "target": "8801716169070"
            },
            {
                "duration": 520,
                "key": 0,
                "numberOfEvents": 13,
                "source": "8801714031499",
                "target": "8801731707300"
            },
            {
                "duration": 927,
                "key": 0,
                "numberOfEvents": 30,
                "source": "8801714031499",
                "target": "8801732926555"
            },
            {
                "duration": 181,
                "key": 0,
                "numberOfEvents": 4,
                "source": "8801714031499",
                "target": "8801733836866"
            },
            {
                "duration": 555,
                "key": 0,
                "numberOfEvents": 8,
                "source": "8801714031499",
                "target": "8801741889483"
            },
            {
                "duration": 1156,
                "key": 0,
                "numberOfEvents": 18,
                "source": "8801714031499",
                "target": "8801755674907"
            },
            {
                "duration": 17,
                "key": 0,
                "numberOfEvents": 1,
                "source": "8801714031499",
                "target": "8801769001829"
            },
            {
                "duration": 662,
                "key": 0,
                "numberOfEvents": 15,
                "source": "8801714031499",
                "target": "8801769008658"
            },
            {
                "duration": 82,
                "key": 0,
                "numberOfEvents": 4,
                "source": "8801714031499",
                "target": "8801777233331"
            },
            {
                "duration": 314,
                "key": 0,
                "numberOfEvents": 4,
                "source": "8801714031499",
                "target": "8801793598742"
            },
            {
                "duration": 524,
                "key": 0,
                "numberOfEvents": 9,
                "source": "8801714031499",
                "target": "8801855109011"
            },
            {
                "duration": 96,
                "key": 0,
                "numberOfEvents": 4,
                "source": "8801714031499",
                "target": "8801884490334"
            },
            {
                "duration": 421,
                "key": 0,
                "numberOfEvents": 16,
                "source": "8801714031499",
                "target": "8801937102127"
            },
            {
                "duration": 1365,
                "key": 0,
                "numberOfEvents": 13,
                "source": "8801714031499",
                "target": "8801955354711"
            },
            {
                "duration": 1765,
                "key": 0,
                "numberOfEvents": 3,
                "source": "8801714031499",
                "target": "8801965163463"
            },
            {
                "duration": 102,
                "key": 0,
                "numberOfEvents": 5,
                "source": "8801714031499",
                "target": "8801972529403"
            },
            {
                "duration": 867,
                "key": 0,
                "numberOfEvents": 10,
                "source": "8801714031499",
                "target": "8801975777888"
            },
            {
                "duration": 896,
                "key": 0,
                "numberOfEvents": 10,
                "source": "8801617666206",
                "target": "8801714031499"
            },
            {
                "duration": 16,
                "key": 0,
                "numberOfEvents": 1,
                "source": "8801620226650",
                "target": "8801714031499"
            },
            {
                "duration": 286,
                "key": 0,
                "numberOfEvents": 4,
                "source": "8801676036818",
                "target": "8801714031499"
            },
            {
                "duration": 667,
                "key": 0,
                "numberOfEvents": 5,
                "source": "8801707538889",
                "target": "8801714031499"
            },
            {
                "duration": 1160,
                "key": 0,
                "numberOfEvents": 28,
                "source": "8801711233474",
                "target": "8801714031499"
            },
            {
                "duration": 551,
                "key": 0,
                "numberOfEvents": 20,
                "source": "8801711676989",
                "target": "8801714031499"
            },
            {
                "duration": 1209,
                "key": 0,
                "numberOfEvents": 12,
                "source": "8801711988101",
                "target": "8801714031499"
            },
            {
                "duration": 339,
                "key": 0,
                "numberOfEvents": 9,
                "source": "8801712121684",
                "target": "8801714031499"
            },
            {
                "duration": 1081,
                "key": 0,
                "numberOfEvents": 18,
                "source": "8801715117005",
                "target": "8801714031499"
            },
            {
                "duration": 382,
                "key": 0,
                "numberOfEvents": 7,
                "source": "8801715429078",
                "target": "8801714031499"
            },
            {
                "duration": 424,
                "key": 0,
                "numberOfEvents": 5,
                "source": "8801715908675",
                "target": "8801714031499"
            },
            {
                "duration": 2123,
                "key": 0,
                "numberOfEvents": 26,
                "source": "8801716169070",
                "target": "8801714031499"
            },
            {
                "duration": 5346,
                "key": 0,
                "numberOfEvents": 45,
                "source": "8801731707300",
                "target": "8801714031499"
            },
            {
                "duration": 3158,
                "key": 0,
                "numberOfEvents": 82,
                "source": "8801732926555",
                "target": "8801714031499"
            },
            {
                "duration": 521,
                "key": 0,
                "numberOfEvents": 10,
                "source": "8801733836866",
                "target": "8801714031499"
            },
            {
                "duration": 37,
                "key": 0,
                "numberOfEvents": 3,
                "source": "8801741889483",
                "target": "8801714031499"
            },
            {
                "duration": 538,
                "key": 0,
                "numberOfEvents": 18,
                "source": "8801755674907",
                "target": "8801714031499"
            },
            {
                "duration": 334,
                "key": 0,
                "numberOfEvents": 8,
                "source": "8801769001829",
                "target": "8801714031499"
            },
            {
                "duration": 423,
                "key": 0,
                "numberOfEvents": 13,
                "source": "8801769008658",
                "target": "8801714031499"
            },
            {
                "duration": 290,
                "key": 0,
                "numberOfEvents": 8,
                "source": "8801777233331",
                "target": "8801714031499"
            },
            {
                "duration": 202,
                "key": 0,
                "numberOfEvents": 7,
                "source": "8801793598742",
                "target": "8801714031499"
            },
            {
                "duration": 265,
                "key": 0,
                "numberOfEvents": 6,
                "source": "8801855109011",
                "target": "8801714031499"
            },
            {
                "duration": 148,
                "key": 0,
                "numberOfEvents": 6,
                "source": "8801884490334",
                "target": "8801714031499"
            },
            {
                "duration": 170,
                "key": 0,
                "numberOfEvents": 6,
                "source": "8801937102127",
                "target": "8801714031499"
            },
            {
                "duration": 173,
                "key": 0,
                "numberOfEvents": 3,
                "source": "8801955354711",
                "target": "8801714031499"
            },
            {
                "duration": 2050,
                "key": 0,
                "numberOfEvents": 4,
                "source": "8801965163463",
                "target": "8801714031499"
            },
            {
                "duration": 87,
                "key": 0,
                "numberOfEvents": 3,
                "source": "8801972529403",
                "target": "8801714031499"
            },
            {
                "duration": 1248,
                "key": 0,
                "numberOfEvents": 29,
                "source": "8801975777888",
                "target": "8801714031499"
            },
            {
                "duration": 1125,
                "key": 0,
                "numberOfEvents": 1,
                "source": " GQ G ",
                "target": "8801796631818"
            },
            {
                "duration": 982,
                "key": 0,
                "numberOfEvents": 4,
                "source": "8801796631818",
                "target": " # "
            },
            {
                "duration": 21,
                "key": 0,
                "numberOfEvents": 1,
                "source": "8801796631818",
                "target": "8801315208038"
            },
            {
                "duration": 17,
                "key": 0,
                "numberOfEvents": 1,
                "source": "8801796631818",
                "target": "8801534304334"
            },
            {
                "duration": 128,
                "key": 0,
                "numberOfEvents": 7,
                "source": "8801796631818",
                "target": "8801616908079"
            },
            {
                "duration": 83,
                "key": 0,
                "numberOfEvents": 1,
                "source": "8801796631818",
                "target": "8801640002527"
            },
            {
                "duration": 83,
                "key": 0,
                "numberOfEvents": 2,
                "source": "8801796631818",
                "target": "8801672682465"
            },
            {
                "duration": 16,
                "key": 0,
                "numberOfEvents": 1,
                "source": "8801796631818",
                "target": "8801726838092"
            },
            {
                "duration": 103,
                "key": 0,
                "numberOfEvents": 2,
                "source": "8801796631818",
                "target": "8801755563585"
            },
            {
                "duration": 55,
                "key": 0,
                "numberOfEvents": 2,
                "source": "8801796631818",
                "target": "8801777676472"
            },
            {
                "duration": 8,
                "key": 0,
                "numberOfEvents": 1,
                "source": "8801796631818",
                "target": "8801780305504"
            },
            {
                "duration": 110,
                "key": 0,
                "numberOfEvents": 2,
                "source": "8801796631818",
                "target": "8801789294698"
            },
            {
                "duration": 124,
                "key": 0,
                "numberOfEvents": 2,
                "source": "8801796631818",
                "target": "8801915588398"
            },
            {
                "duration": 62,
                "key": 0,
                "numberOfEvents": 1,
                "source": "8801796631818",
                "target": "8801919316489"
            },
            {
                "duration": 16,
                "key": 0,
                "numberOfEvents": 1,
                "source": "8801796631818",
                "target": "8801984816926"
            },
            {
                "duration": 852,
                "key": 0,
                "numberOfEvents": 10,
                "source": "8801796631818",
                "target": "8801990081308"
            },
            {
                "duration": 43,
                "key": 0,
                "numberOfEvents": 1,
                "source": "8801796631818",
                "target": "8801993330337"
            },
            {
                "duration": 67,
                "key": 0,
                "numberOfEvents": 3,
                "source": "8801304043158",
                "target": "8801796631818"
            },
            {
                "duration": 30,
                "key": 0,
                "numberOfEvents": 1,
                "source": "8801313444825",
                "target": "8801796631818"
            },
            {
                "duration": 59,
                "key": 0,
                "numberOfEvents": 2,
                "source": "8801321151444",
                "target": "8801796631818"
            },
            {
                "duration": 425,
                "key": 0,
                "numberOfEvents": 1,
                "source": "8801324432386",
                "target": "8801796631818"
            },
            {
                "duration": 56,
                "key": 0,
                "numberOfEvents": 2,
                "source": "8801568178403",
                "target": "8801796631818"
            },
            {
                "duration": 85,
                "key": 0,
                "numberOfEvents": 3,
                "source": "8801568482105",
                "target": "8801796631818"
            },
            {
                "duration": 68,
                "key": 0,
                "numberOfEvents": 2,
                "source": "8801601844883",
                "target": "8801796631818"
            },
            {
                "duration": 210,
                "key": 0,
                "numberOfEvents": 1,
                "source": "8801610002808",
                "target": "8801796631818"
            },
            {
                "duration": 91,
                "key": 0,
                "numberOfEvents": 1,
                "source": "8801614848435",
                "target": "8801796631818"
            },
            {
                "duration": 77,
                "key": 0,
                "numberOfEvents": 4,
                "source": "8801616908079",
                "target": "8801796631818"
            },
            {
                "duration": 426,
                "key": 0,
                "numberOfEvents": 2,
                "source": "8801633756294",
                "target": "8801796631818"
            },
            {
                "duration": 163,
                "key": 0,
                "numberOfEvents": 2,
                "source": "8801710010029",
                "target": "8801796631818"
            },
            {
                "duration": 1346,
                "key": 0,
                "numberOfEvents": 2,
                "source": "8801726838092",
                "target": "8801796631818"
            },
            {
                "duration": 54,
                "key": 0,
                "numberOfEvents": 2,
                "source": "8801743878604",
                "target": "8801796631818"
            },
            {
                "duration": 22,
                "key": 0,
                "numberOfEvents": 1,
                "source": "8801780305504",
                "target": "8801796631818"
            },
            {
                "duration": 34,
                "key": 0,
                "numberOfEvents": 1,
                "source": "8801789294698",
                "target": "8801796631818"
            },
            {
                "duration": 18,
                "key": 0,
                "numberOfEvents": 1,
                "source": "8801919316489",
                "target": "8801796631818"
            },
            {
                "duration": 153,
                "key": 0,
                "numberOfEvents": 2,
                "source": "8801984816926",
                "target": "8801796631818"
            },
            {
                "duration": 889,
                "key": 0,
                "numberOfEvents": 5,
                "source": "8801990081308",
                "target": "8801796631818"
            },
            {
                "duration": 157,
                "key": 0,
                "numberOfEvents": 1,
                "source": "8801993330337",
                "target": "8801796631818"
            },
            {
                "duration": 89,
                "key": 0,
                "numberOfEvents": 2,
                "source": "9638014619",
                "target": "8801796631818"
            },
            {
                "duration": 271,
                "key": 0,
                "numberOfEvents": 5,
                "source": "8801300254637",
                "target": "8801874882333"
            },
            {
                "duration": 12,
                "key": 0,
                "numberOfEvents": 2,
                "source": "8801874882333",
                "target": "880101418801717288255"
            },
            {
                "duration": 60,
                "key": 0,
                "numberOfEvents": 3,
                "source": "8801874882333",
                "target": "8801309249672"
            },
            {
                "duration": 154,
                "key": 0,
                "numberOfEvents": 1,
                "source": "8801874882333",
                "target": "8801316508210"
            },
            {
                "duration": 32,
                "key": 0,
                "numberOfEvents": 1,
                "source": "8801874882333",
                "target": "8801404999321"
            },
            {
                "duration": 39,
                "key": 0,
                "numberOfEvents": 1,
                "source": "8801874882333",
                "target": "8801568273253"
            },
            {
                "duration": 133,
                "key": 0,
                "numberOfEvents": 3,
                "source": "8801874882333",
                "target": "8801717288255"
            },
            {
                "duration": 1170,
                "key": 0,
                "numberOfEvents": 15,
                "source": "8801874882333",
                "target": "8801720455005"
            },
            {
                "duration": 226,
                "key": 0,
                "numberOfEvents": 3,
                "source": "8801874882333",
                "target": "8801723067639"
            },
            {
                "duration": 371,
                "key": 0,
                "numberOfEvents": 3,
                "source": "8801874882333",
                "target": "8801725052623"
            },
            {
                "duration": 8050,
                "key": 0,
                "numberOfEvents": 27,
                "source": "8801874882333",
                "target": "8801737518209"
            },
            {
                "duration": 1513,
                "key": 0,
                "numberOfEvents": 7,
                "source": "8801874882333",
                "target": "8801737958131"
            },
            {
                "duration": 4455,
                "key": 0,
                "numberOfEvents": 28,
                "source": "8801874882333",
                "target": "8801739461722"
            },
            {
                "duration": 485,
                "key": 0,
                "numberOfEvents": 8,
                "source": "8801874882333",
                "target": "8801744479054"
            },
            {
                "duration": 20,
                "key": 0,
                "numberOfEvents": 1,
                "source": "8801874882333",
                "target": "8801746503547"
            },
            {
                "duration": 134,
                "key": 0,
                "numberOfEvents": 2,
                "source": "8801874882333",
                "target": "8801748165180"
            },
            {
                "duration": 95,
                "key": 0,
                "numberOfEvents": 3,
                "source": "8801874882333",
                "target": "8801766515886"
            },
            {
                "duration": 119,
                "key": 0,
                "numberOfEvents": 3,
                "source": "8801874882333",
                "target": "8801783063699"
            },
            {
                "duration": 243,
                "key": 0,
                "numberOfEvents": 2,
                "source": "8801874882333",
                "target": "8801823291545"
            },
            {
                "duration": 34,
                "key": 0,
                "numberOfEvents": 2,
                "source": "8801874882333",
                "target": "8801824728421"
            },
            {
                "duration": 127,
                "key": 0,
                "numberOfEvents": 4,
                "source": "8801874882333",
                "target": "8801831649398"
            },
            {
                "duration": 214,
                "key": 0,
                "numberOfEvents": 4,
                "source": "8801874882333",
                "target": "8801883145894"
            },
            {
                "duration": 790,
                "key": 0,
                "numberOfEvents": 17,
                "source": "8801874882333",
                "target": "8801886773233"
            },
            {
                "duration": 191,
                "key": 0,
                "numberOfEvents": 7,
                "source": "8801874882333",
                "target": "8801940808939"
            },
            {
                "duration": 93,
                "key": 0,
                "numberOfEvents": 3,
                "source": "8801874882333",
                "target": "8801948144929"
            },
            {
                "duration": 285,
                "key": 0,
                "numberOfEvents": 4,
                "source": "8801874882333",
                "target": "8801977967073"
            },
            {
                "duration": 562,
                "key": 0,
                "numberOfEvents": 13,
                "source": "8801874882333",
                "target": "8801999992353"
            },
            {
                "duration": 320,
                "key": 0,
                "numberOfEvents": 4,
                "source": "8801309249672",
                "target": "8801874882333"
            },
            {
                "duration": 440,
                "key": 0,
                "numberOfEvents": 2,
                "source": "8801316508210",
                "target": "8801874882333"
            },
            {
                "duration": 22,
                "key": 0,
                "numberOfEvents": 1,
                "source": "8801568273253",
                "target": "8801874882333"
            },
            {
                "duration": 265,
                "key": 0,
                "numberOfEvents": 1,
                "source": "8801634762138",
                "target": "8801874882333"
            },
            {
                "duration": 1301,
                "key": 0,
                "numberOfEvents": 27,
                "source": "8801720455005",
                "target": "8801874882333"
            },
            {
                "duration": 303,
                "key": 0,
                "numberOfEvents": 7,
                "source": "8801723067639",
                "target": "8801874882333"
            },
            {
                "duration": 239,
                "key": 0,
                "numberOfEvents": 5,
                "source": "8801725052623",
                "target": "8801874882333"
            },
            {
                "duration": 31,
                "key": 0,
                "numberOfEvents": 2,
                "source": "8801737518209",
                "target": "8801874882333"
            },
            {
                "duration": 45,
                "key": 0,
                "numberOfEvents": 2,
                "source": "8801737958131",
                "target": "8801874882333"
            },
            {
                "duration": 719,
                "key": 0,
                "numberOfEvents": 5,
                "source": "8801739461722",
                "target": "8801874882333"
            },
            {
                "duration": 99,
                "key": 0,
                "numberOfEvents": 2,
                "source": "8801744479054",
                "target": "8801874882333"
            },
            {
                "duration": 38,
                "key": 0,
                "numberOfEvents": 1,
                "source": "8801746503547",
                "target": "8801874882333"
            },
            {
                "duration": 145,
                "key": 0,
                "numberOfEvents": 4,
                "source": "8801783063699",
                "target": "8801874882333"
            },
            {
                "duration": 20,
                "key": 0,
                "numberOfEvents": 1,
                "source": "8801824728421",
                "target": "8801874882333"
            },
            {
                "duration": 234,
                "key": 0,
                "numberOfEvents": 2,
                "source": "8801828954413",
                "target": "8801874882333"
            },
            {
                "duration": 859,
                "key": 0,
                "numberOfEvents": 9,
                "source": "8801883145894",
                "target": "8801874882333"
            },
            {
                "duration": 166,
                "key": 0,
                "numberOfEvents": 10,
                "source": "8801886773233",
                "target": "8801874882333"
            },
            {
                "duration": 125,
                "key": 0,
                "numberOfEvents": 6,
                "source": "8801940808939",
                "target": "8801874882333"
            },
            {
                "duration": 106,
                "key": 0,
                "numberOfEvents": 1,
                "source": "8801977967073",
                "target": "8801874882333"
            },
            {
                "duration": 1009,
                "key": 0,
                "numberOfEvents": 25,
                "source": "8801999992353",
                "target": "8801874882333"
            },
            {
                "duration": 52,
                "key": 0,
                "numberOfEvents": 2,
                "source": "8801876110082",
                "target": "8801874882333"
            },
            {
                "duration": 52,
                "key": 0,
                "numberOfEvents": 2,
                "source": "8801714031499",
                "target": "8801796631818"
            },
            {
                "duration": 52,
                "key": 0,
                "numberOfEvents": 2,
                "source": "8801796631818",
                "target": "8801874882333"
            },
            {
                "duration": 52,
                "key": 0,
                "numberOfEvents": 2,
                "source": "8801601844883",
                "target": "8801744479054"
            }
        ],
        "nodes": [
            {
                "id": "8801611045417",
            },
            {
                "id": "8801714031499"
            },
            {
                "id": "8801617666206"
            },
            {
                "id": "8801620226650"
            },
            {
                "id": "8801676036818"
            },
            {
                "id": "8801707538889"
            },
            {
                "id": "8801711233474"
            },
            {
                "id": "8801711676989"
            },
            {
                "id": "8801711988101"
            },
            {
                "id": "8801712121684"
            },
            {
                "id": "8801673985481"
            },
            {
                "id": "8801715117005"
            },
            {
                "id": "8801715429078"
            },
            {
                "id": "8801715908675"
            },
            {
                "id": "8801716169070"
            },
            {
                "id": "8801731707300"
            },
            {
                "id": "8801732926555"
            },
            {
                "id": "8801733836866"
            },
            {
                "id": "8801741889483"
            },
            {
                "id": "8801755674907"
            },
            {
                "id": "8801769001829"
            },
            {
                "id": "8801769008658"
            },
            {
                "id": "8801777233331"
            },
            {
                "id": "8801793598742"
            },
            {
                "id": "8801855109011"
            },
            {
                "id": "8801884490334"
            },
            {
                "id": "8801937102127"
            },
            {
                "id": "8801955354711"
            },
            {
                "id": "8801965163463"
            },
            {
                "id": "8801972529403"
            },
            {
                "id": "8801975777888"
            },
            {
                "id": " GQ G "
            },
            {
                "id": "8801796631818"
            },
            {
                "id": "8801304043158"
            },
            {
                "id": "8801313444825"
            },
            {
                "id": "8801321151444"
            },
            {
                "id": "8801324432386"
            },
            {
                "id": "8801568178403"
            },
            {
                "id": "8801568482105"
            },
            {
                "id": "8801601844883"
            },
            {
                "id": "8801610002808"
            },
            {
                "id": "8801614848435"
            },
            {
                "id": "8801616908079"
            },
            {
                "id": "8801633756294"
            },
            {
                "id": "8801710010029"
            },
            {
                "id": "8801726838092"
            },
            {
                "id": "8801743878604"
            },
            {
                "id": "8801780305504"
            },
            {
                "id": "8801789294698"
            },
            {
                "id": " # "
            },
            {
                "id": "8801315208038"
            },
            {
                "id": "8801534304334"
            },
            {
                "id": "8801640002527"
            },
            {
                "id": "8801672682465"
            },
            {
                "id": "8801755563585"
            },
            {
                "id": "8801777676472"
            },
            {
                "id": "8801915588398"
            },
            {
                "id": "8801919316489"
            },
            {
                "id": "8801984816926"
            },
            {
                "id": "8801990081308"
            },
            {
                "id": "8801993330337"
            },
            {
                "id": "9638014619"
            },
            {
                "id": "8801300254637"
            },
            {
                "id": "8801874882333"
            },
            {
                "id": "8801309249672"
            },
            {
                "id": "8801316508210"
            },
            {
                "id": "8801568273253"
            },
            {
                "id": "8801634762138"
            },
            {
                "id": "8801720455005"
            },
            {
                "id": "8801723067639"
            },
            {
                "id": "8801725052623"
            },
            {
                "id": "8801737518209"
            },
            {
                "id": "8801737958131"
            },
            {
                "id": "8801739461722"
            },
            {
                "id": "8801744479054"
            },
            {
                "id": "8801746503547"
            },
            {
                "id": "8801783063699"
            },
            {
                "id": "8801824728421"
            },
            {
                "id": "8801828954413"
            },
            {
                "id": "880101418801717288255"
            },
            {
                "id": "8801404999321"
            },
            {
                "id": "8801717288255"
            },
            {
                "id": "8801748165180"
            },
            {
                "id": "8801766515886"
            },
            {
                "id": "8801823291545"
            },
            {
                "id": "8801831649398"
            },
            {
                "id": "8801883145894"
            },
            {
                "id": "8801886773233"
            },
            {
                "id": "8801940808939"
            },
            {
                "id": "8801948144929"
            },
            {
                "id": "8801977967073"
            },
            {
                "id": "8801999992353"
            },
            {
                "id": "8801876110082",
                "color": "green"
            }
        ]
    });

    return (
        <div>
            <LinkAnalysis data={data}/>
            {/*<ForceGraph3dComponent data={data} />*/}
        </div>
    );
}

export default App;
