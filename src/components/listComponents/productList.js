import { ScrollView, View } from "react-native";
import React, { useState } from "react";
import { homeStyles } from "../../styles/homeStyles";
import ProductCard from "./productCard";

export default ProductList = ({ navigation }) => {
  const [productList, setProductList] = useState([
    {
      _id: "646d3fa921307013c3b06bb6",
      image: "https://picsum.photos/id/90/200/300",
      price: 159,
      discount: 28,
      name: "Coats",
      about:
        "Elit ipsum in dolore culpa. Proident dolore laborum reprehenderit voluptate laborum incididunt sunt nisi laboris esse excepteur proident nulla id. Nulla consectetur eu do aliqua sint do. Labore non non reprehenderit voluptate veniam.\r\n",
    },
    {
      _id: "646d3fa93fe5ddf54231e4e3",
      image: "https://picsum.photos/id/54/200/300",
      price: 118,
      discount: 51,
      name: "T-Shirt",
      about:
        "Dolore occaecat quis reprehenderit aliqua eu elit pariatur fugiat. Ipsum tempor est et ex excepteur. Culpa ad duis irure elit voluptate ullamco Lorem magna eiusmod consectetur sunt laborum. Ex magna cupidatat laboris laborum culpa eiusmod tempor tempor elit. Amet duis sit anim esse ipsum eiusmod. Incididunt non aliquip mollit id sit commodo irure voluptate laboris ad dolore.\r\n",
    },
    {
      _id: "646d3fa9769fa1cac15c4a4f",
      image: "https://picsum.photos/id/47/200/300",
      price: 151,
      discount: 53,
      name: "Jean",
      about:
        "Labore voluptate non minim voluptate incididunt. Est nostrud est ullamco exercitation tempor incididunt ipsum sint nulla officia id sunt labore cupidatat. Officia culpa esse sint duis consequat adipisicing ea sint amet dolore.\r\n",
    },
    {
      _id: "646d3fa962ca363d915ad444",
      image: "https://picsum.photos/id/25/200/300",
      price: 231,
      discount: 25,
      name: "T-Shirt",
      about:
        "Tempor consectetur labore dolor veniam cillum cupidatat amet. Lorem ex fugiat ullamco aute eiusmod exercitation laborum occaecat. Anim id sunt Lorem elit.\r\n",
    },
    {
      _id: "646d3fa9c58b19c6383c3a78",
      image: "https://picsum.photos/id/87/200/300",
      price: 221,
      discount: 72,
      name: "T-Shirt",
      about:
        "Mollit tempor sunt dolore laboris duis reprehenderit ipsum dolor deserunt. Reprehenderit ex anim laborum mollit pariatur occaecat. Sit anim ipsum pariatur ut dolore. Consequat id eu duis commodo cillum. Reprehenderit amet nisi tempor in. Laboris culpa duis dolore anim pariatur.\r\n",
    },
    {
      _id: "646d3fa9a6791f8a468e3e13",
      image: "https://picsum.photos/id/63/200/300",
      price: 453,
      discount: 29,
      name: "Sweater",
      about:
        "Incididunt veniam dolor magna aliqua officia eiusmod laborum veniam magna laboris deserunt sunt veniam. Incididunt do sit magna eiusmod Lorem. Pariatur dolor cupidatat esse qui irure reprehenderit. Id voluptate non et quis cupidatat in ipsum. Excepteur amet mollit dolore anim id in aute nulla. Anim cillum nulla velit aliqua minim elit nulla laborum. Et dolor ad veniam veniam pariatur enim.\r\n",
    },
    {
      _id: "646d3fa9c5e1e2bbc1284722",
      image: "https://picsum.photos/id/49/200/300",
      price: 326,
      discount: 50,
      name: "Shirt",
      about:
        "Consectetur ea sit incididunt aute sint labore nostrud ut ex. Non officia est voluptate fugiat. Nostrud nisi labore velit nulla in minim pariatur esse in nisi sunt. Magna enim ex adipisicing velit ad eiusmod qui aliquip ea id nisi occaecat. Cupidatat dolor laborum reprehenderit sint irure nisi laborum. Est consequat enim laboris et in sit cillum laboris dolor eu nostrud. Aliquip cillum cillum id dolore voluptate laboris enim magna do.\r\n",
    },
    {
      _id: "646d3fa96641bb549550e79c",
      image: "https://picsum.photos/id/89/200/300",
      price: 265,
      discount: 67,
      name: "Sweater",
      about:
        "Lorem est excepteur quis nulla dolore non ipsum anim consequat. Sunt nostrud mollit proident cillum commodo quis irure dolor aliqua irure esse ullamco pariatur. Ullamco tempor ex ipsum nostrud mollit occaecat exercitation commodo reprehenderit ut. Duis aute ex consequat ex excepteur aute nisi esse cupidatat nulla velit eiusmod do dolore. Officia elit eu magna elit excepteur laborum tempor ad sint commodo ea dolore culpa.\r\n",
    },
    {
      _id: "646d3fa98a5e9ab4539a0318",
      image: "https://picsum.photos/id/92/200/300",
      price: 183,
      discount: 55,
      name: "Coats",
      about:
        "Fugiat nisi sit excepteur ea incididunt dolore veniam labore anim fugiat. Laboris occaecat id minim enim do enim cupidatat reprehenderit anim. Enim ex commodo sint voluptate excepteur. Non occaecat sit voluptate quis esse magna. Do ad dolore proident ut tempor labore nisi nostrud dolor ex eiusmod et. Aute consequat occaecat sit aute fugiat pariatur enim et enim officia aliquip proident enim ut. Ex duis tempor cupidatat aliqua enim ut elit commodo sint do sint exercitation.\r\n",
    },
    {
      _id: "646d3fa9f9ed9563ca617373",
      image: "https://picsum.photos/id/2/200/300",
      price: 82,
      discount: 60,
      name: "Sweater",
      about:
        "Veniam labore enim exercitation velit excepteur labore commodo do laboris qui pariatur. Sit anim culpa excepteur cupidatat commodo fugiat exercitation aute nisi velit Lorem velit. Exercitation esse sunt velit aute consectetur dolor non laborum ut enim deserunt ut aute. Lorem eiusmod proident consectetur quis pariatur ea sunt ex deserunt. Dolor dolor dolor ipsum consequat amet nulla anim aliquip commodo commodo. Cillum culpa elit consequat laboris pariatur adipisicing esse ad in.\r\n",
    },
    {
      _id: "646d3fa9ca05d9eec8b17d2c",
      image: "https://picsum.photos/id/48/200/300",
      price: 212,
      discount: 39,
      name: "Jean",
      about:
        "Irure officia occaecat velit deserunt irure exercitation. Pariatur dolore anim non officia nisi nisi nulla tempor dolore duis qui. Officia occaecat dolor sunt duis minim sint cillum cupidatat aliqua ex eu cupidatat velit. Culpa adipisicing officia occaecat id labore nostrud duis magna tempor. Velit sunt tempor officia magna veniam pariatur commodo.\r\n",
    },
    {
      _id: "646d3fa97abbd7e035e9b5ce",
      image: "https://picsum.photos/id/83/200/300",
      price: 388,
      discount: 59,
      name: "Sweater",
      about:
        "Sit et officia Lorem cillum laboris eiusmod commodo magna. Lorem mollit Lorem officia ad ipsum et. Magna elit ex excepteur in nostrud amet. Ad nostrud do anim laboris pariatur culpa velit sunt eu aliquip ea est. Aliqua officia excepteur consectetur ut nisi aliqua ipsum adipisicing ex Lorem enim ut veniam.\r\n",
    },
    {
      _id: "646d3fa92a8a7b4eba142b3e",
      image: "https://picsum.photos/id/60/200/300",
      price: 443,
      discount: 48,
      name: "Pant",
      about:
        "Esse quis ut veniam deserunt officia sunt ea reprehenderit labore veniam. Duis Lorem non eu veniam irure quis sit dolore irure id excepteur. Enim esse eiusmod cupidatat non dolore voluptate labore. Aute adipisicing aute eiusmod consectetur velit ut ad dolore tempor tempor non enim exercitation.\r\n",
    },
    {
      _id: "646d3fa9a7ab3f50a117553e",
      image: "https://picsum.photos/id/45/200/300",
      price: 178,
      discount: 54,
      name: "Jean",
      about:
        "Est excepteur incididunt sunt exercitation. Anim consectetur tempor commodo est irure nulla qui elit ea deserunt eiusmod proident cupidatat sunt. Culpa deserunt reprehenderit enim cupidatat non ex labore ut. Proident nostrud qui incididunt aliqua veniam. Lorem sit exercitation ad dolore nisi eiusmod pariatur. Officia laboris duis Lorem ipsum nisi.\r\n",
    },
    {
      _id: "646d3fa9390882a09505231e",
      image: "https://picsum.photos/id/71/200/300",
      price: 283,
      discount: 62,
      name: "Jean",
      about:
        "Nulla sunt id laboris sit excepteur laboris anim dolor voluptate. Reprehenderit dolor consectetur qui ad eu sit pariatur deserunt excepteur commodo. Dolor velit mollit Lorem do in adipisicing laboris ea cupidatat aliquip aute laboris est. Minim velit tempor ea est. Minim incididunt voluptate officia ad minim laboris tempor sunt in mollit. Fugiat nisi nulla eiusmod elit occaecat pariatur. Anim aute adipisicing voluptate sint nostrud Lorem labore aute sint nisi quis magna occaecat.\r\n",
    },
    {
      _id: "646d3fa941c22598f1ac097f",
      image: "https://picsum.photos/id/61/200/300",
      price: 419,
      discount: 32,
      name: "Jean",
      about:
        "Ea eu ad ut eu magna magna elit. Id qui consectetur exercitation exercitation ut officia. Velit elit culpa culpa ut veniam nostrud tempor Lorem. Eu ad ex nisi tempor Lorem sit sunt consequat pariatur. Laboris non nulla laboris non. Elit id mollit aliqua laboris occaecat nostrud qui occaecat cupidatat proident proident. Sint consectetur consequat velit do ut Lorem duis.\r\n",
    },
    {
      _id: "646d3fa926f55b563968a0a9",
      image: "https://picsum.photos/id/18/200/300",
      price: 122,
      discount: 70,
      name: "Shirt",
      about:
        "Occaecat sint irure elit voluptate consectetur cillum labore minim ullamco. Ipsum sunt sint proident proident et magna culpa. Duis aliqua qui eu mollit adipisicing non ut minim pariatur occaecat ut aute duis.\r\n",
    },
    {
      _id: "646d3fa9b31c61caea3e07b1",
      image: "https://picsum.photos/id/70/200/300",
      price: 189,
      discount: 46,
      name: "T-Shirt",
      about:
        "Ut elit aliqua consectetur non minim culpa dolore nulla consequat excepteur ut. Velit tempor minim excepteur amet ullamco et mollit. Lorem ullamco velit dolore sint aliqua nostrud dolor dolor. Culpa consectetur aute ex ipsum reprehenderit. Aliqua exercitation adipisicing labore cupidatat fugiat irure proident labore nisi. Amet culpa laborum do incididunt nulla aliqua mollit officia velit incididunt.\r\n",
    },
    {
      _id: "646d3fa9ba1980b66c76bc4d",
      image: "https://picsum.photos/id/61/200/300",
      price: 70,
      discount: 46,
      name: "Pant",
      about:
        "Id dolore laboris minim ad deserunt nostrud. Esse incididunt irure sit ea deserunt aute nisi laborum eu laboris incididunt incididunt ullamco. Ad sit aute laborum aliquip. Proident magna labore do non occaecat sint laboris ea. Cupidatat duis commodo commodo sint dolore aute eu non.\r\n",
    },
    {
      _id: "646d3fa938fe069a5229f774",
      image: "https://picsum.photos/id/84/200/300",
      price: 477,
      discount: 47,
      name: "Sweater",
      about:
        "Cillum elit eu exercitation adipisicing exercitation qui. Ipsum ut ullamco labore veniam. Enim dolor enim consectetur irure non nisi pariatur excepteur ex minim labore Lorem amet veniam. Lorem minim ut aliquip anim nulla deserunt consequat proident in ullamco ex sint.\r\n",
    },
    {
      _id: "646d3fa9496d7dd0163d2f45",
      image: "https://picsum.photos/id/32/200/300",
      price: 480,
      discount: 30,
      name: "T-Shirt",
      about:
        "In aliquip consequat elit enim elit velit eiusmod qui ea occaecat laboris sunt. Ut eiusmod consequat deserunt aliquip reprehenderit ad et nulla deserunt veniam ullamco reprehenderit. Ullamco culpa excepteur aliquip ea enim ea enim cillum. Lorem ad Lorem officia cillum qui. Cillum adipisicing ea tempor do eiusmod eu veniam. Exercitation qui velit adipisicing cupidatat est esse id tempor laboris. Dolor eu sit officia nulla minim duis laborum.\r\n",
    },
    {
      _id: "646d3fa9840db7b0013e4be9",
      image: "https://picsum.photos/id/67/200/300",
      price: 216,
      discount: 35,
      name: "Jean",
      about:
        "Tempor deserunt veniam Lorem sit elit dolore amet incididunt minim eu. Occaecat proident commodo velit cupidatat exercitation sint. Mollit dolor tempor consectetur et commodo. Magna incididunt non et ea est et excepteur dolor excepteur officia pariatur veniam nostrud. Esse fugiat ea ex voluptate ea exercitation consequat voluptate ad elit laborum sint qui duis.\r\n",
    },
    {
      _id: "646d3fa9c861761c81b641be",
      image: "https://picsum.photos/id/57/200/300",
      price: 398,
      discount: 58,
      name: "Jean",
      about:
        "Commodo aliqua nulla cillum laborum et cillum do aliquip aute ex irure veniam qui. Voluptate do excepteur minim non fugiat laborum reprehenderit. Labore elit tempor dolor non. Veniam commodo reprehenderit aliqua adipisicing cupidatat deserunt non minim tempor id aute adipisicing et cillum.\r\n",
    },
    {
      _id: "646d3fa99b375f96b9eb02e5",
      image: "https://picsum.photos/id/27/200/300",
      price: 447,
      discount: 69,
      name: "Sweater",
      about:
        "Cupidatat fugiat pariatur aliquip sit ex velit. Dolor dolor et duis do tempor sint enim mollit eu ad excepteur. Eiusmod duis dolor ullamco exercitation eu proident mollit amet sit do anim fugiat aliqua. Ad qui commodo et sint. Aliquip incididunt magna do quis consequat. Occaecat quis sunt laborum et nulla. Eu aliquip reprehenderit reprehenderit consectetur.\r\n",
    },
    {
      _id: "646d3fa9c6a5369e6a0dfbd9",
      image: "https://picsum.photos/id/77/200/300",
      price: 336,
      discount: 38,
      name: "Coats",
      about:
        "Non exercitation ex non esse veniam velit aute velit esse consequat anim velit. Cupidatat commodo velit laborum nulla veniam magna tempor deserunt Lorem do labore cillum non. Proident eu enim laboris ut cupidatat aliqua ipsum reprehenderit velit deserunt ea cupidatat anim. Officia aliqua adipisicing consequat aliqua voluptate quis. Occaecat officia ipsum anim non ad qui dolor. Ex reprehenderit eu fugiat labore consectetur adipisicing ullamco labore proident nisi id. Adipisicing ex quis anim qui culpa deserunt id consectetur dolor.\r\n",
    },
    {
      _id: "646d3fa9173c3e792f0f803b",
      image: "https://picsum.photos/id/21/200/300",
      price: 413,
      discount: 70,
      name: "Pant",
      about:
        "Aliquip adipisicing irure laboris est pariatur est nostrud non deserunt voluptate. Culpa Lorem qui nisi laboris velit reprehenderit id aliqua magna. Adipisicing mollit nisi cillum voluptate dolore do sunt occaecat sunt. Ullamco aliquip irure tempor duis. Aliquip aute est irure mollit ad. Ex labore velit velit qui. Excepteur sit in nostrud culpa eu ullamco labore aute.\r\n",
    },
    {
      _id: "646d3fa9133f5857acede2d2",
      image: "https://picsum.photos/id/54/200/300",
      price: 99,
      discount: 57,
      name: "Sweater",
      about:
        "Duis in ullamco aliquip pariatur dolor. Ea do velit reprehenderit voluptate ea. Nisi consequat eiusmod Lorem et eu consectetur laborum aute reprehenderit aliqua ad occaecat deserunt. In minim veniam et ea magna culpa Lorem sunt ad eu id consectetur id. Nulla anim dolore ullamco irure eu magna.\r\n",
    },
    {
      _id: "646d3fa99f5542be6b7cd99c",
      image: "https://picsum.photos/id/19/200/300",
      price: 68,
      discount: 34,
      name: "Jean",
      about:
        "Duis laborum amet non consequat. Nisi et magna voluptate ut quis aute minim veniam quis ipsum qui ea. Exercitation dolor tempor nisi enim minim nulla adipisicing do ea ipsum aliquip nulla quis. Elit adipisicing ea laboris nisi dolor officia id voluptate.\r\n",
    },
    {
      _id: "646d3fa9bba581b802bccc03",
      image: "https://picsum.photos/id/43/200/300",
      price: 214,
      discount: 45,
      name: "Jean",
      about:
        "Elit dolor pariatur deserunt proident anim ut veniam est veniam dolor cillum nisi aliqua aliqua. Sunt excepteur do elit do dolore mollit in exercitation sint ex fugiat eu voluptate eu. Ea commodo aute non adipisicing veniam quis culpa sit ipsum occaecat in. Lorem pariatur deserunt cupidatat nulla mollit culpa cupidatat sit excepteur dolor. Amet irure consectetur cupidatat consequat ex Lorem tempor consectetur anim. Ea culpa fugiat proident adipisicing in do nulla mollit culpa fugiat fugiat quis culpa. Ea non deserunt aliquip ullamco sint commodo eu sint et.\r\n",
    },
    {
      _id: "646d3fa902595b97ffa088d7",
      image: "https://picsum.photos/id/9/200/300",
      price: 264,
      discount: 55,
      name: "Sweater",
      about:
        "Commodo pariatur non aliqua adipisicing enim commodo exercitation in excepteur irure occaecat duis nostrud pariatur. Esse cupidatat non excepteur eiusmod in laborum. Laborum id et magna voluptate laboris ad occaecat culpa in eu consequat adipisicing nisi.\r\n",
    },
    {
      _id: "646d3fa9036aac46b69261d1",
      image: "https://picsum.photos/id/25/200/300",
      price: 143,
      discount: 58,
      name: "Pant",
      about:
        "Dolore cupidatat minim esse aliqua consequat eu duis. Cupidatat sunt nisi voluptate amet reprehenderit commodo exercitation est. Nostrud ex quis dolore culpa adipisicing laboris excepteur exercitation. Occaecat esse qui consequat excepteur mollit id id. Tempor sit consectetur fugiat laborum aliquip officia deserunt ut.\r\n",
    },
    {
      _id: "646d3fa921bdc95993d830b8",
      image: "https://picsum.photos/id/56/200/300",
      price: 309,
      discount: 41,
      name: "T-Shirt",
      about:
        "Anim nisi nisi dolore nulla aliquip anim ut deserunt voluptate reprehenderit tempor magna dolor non. Minim duis laborum sint aliqua. Lorem fugiat officia ipsum aliquip ex. Occaecat ipsum duis commodo ullamco do duis. Est enim velit proident consectetur ipsum excepteur et commodo deserunt anim nostrud qui irure. Incididunt velit labore ipsum minim dolor.\r\n",
    },
    {
      _id: "646d3fa9bda816b5dc41173a",
      image: "https://picsum.photos/id/38/200/300",
      price: 430,
      discount: 72,
      name: "Coats",
      about:
        "Enim elit ut Lorem esse. Culpa anim do qui exercitation adipisicing mollit velit do sint. Cupidatat esse nostrud in incididunt consequat cupidatat ullamco pariatur aute incididunt. Reprehenderit adipisicing dolor laboris quis incididunt anim fugiat.\r\n",
    },
    {
      _id: "646d3fa9162cf1798ebadc36",
      image: "https://picsum.photos/id/54/200/300",
      price: 144,
      discount: 29,
      name: "Shirt",
      about:
        "Do nulla nulla ut nulla ipsum voluptate enim sint cupidatat in irure anim sunt. Exercitation voluptate tempor sint quis eu tempor esse esse non laboris. Tempor eu proident eiusmod amet nisi. Exercitation labore cillum culpa eiusmod. Ullamco reprehenderit amet amet dolor. Quis esse in commodo amet cillum sunt elit.\r\n",
    },
    {
      _id: "646d3fa9c3c9951aead118c4",
      image: "https://picsum.photos/id/43/200/300",
      price: 152,
      discount: 41,
      name: "Jean",
      about:
        "Occaecat reprehenderit officia deserunt do consectetur minim cupidatat consequat laboris dolore voluptate sint qui. Incididunt irure officia ipsum excepteur ut. Excepteur ea irure nostrud anim ut consectetur esse esse mollit enim consequat dolor. Dolor sint do elit eu eu enim est pariatur cillum anim. Ea commodo consectetur excepteur mollit proident. Veniam fugiat commodo proident exercitation fugiat veniam irure eu voluptate ex amet fugiat ipsum. Non consectetur eu pariatur adipisicing consectetur.\r\n",
    },
    {
      _id: "646d3fa98edf3b684c647ebe",
      image: "https://picsum.photos/id/41/200/300",
      price: 197,
      discount: 37,
      name: "T-Shirt",
      about:
        "Veniam voluptate veniam deserunt ullamco est irure laboris consequat laborum cupidatat pariatur incididunt Lorem magna. Proident id fugiat amet sit dolor commodo minim ipsum. Velit non magna fugiat qui. Tempor quis nostrud aliquip dolore. Et non ipsum fugiat veniam voluptate culpa esse. Velit ea elit eu cillum. Ex dolore amet id velit incididunt sint nulla.\r\n",
    },
    {
      _id: "646d3fa90bfb21005635f962",
      image: "https://picsum.photos/id/72/200/300",
      price: 347,
      discount: 39,
      name: "Pant",
      about:
        "Velit excepteur aliquip laborum labore. Sit voluptate ad consectetur laborum ex laborum ut. Ex culpa reprehenderit quis nisi adipisicing. Deserunt proident anim commodo adipisicing in esse elit reprehenderit. Lorem enim ut excepteur reprehenderit ut cupidatat ipsum anim excepteur nulla excepteur ex.\r\n",
    },
    {
      _id: "646d3fa9c5569573b5d46589",
      image: "https://picsum.photos/id/23/200/300",
      price: 231,
      discount: 60,
      name: "Shirt",
      about:
        "Nisi pariatur ipsum pariatur sint ut consectetur irure exercitation id eiusmod exercitation nostrud esse. Elit labore ipsum aute aliqua incididunt. Id irure anim reprehenderit consectetur non esse laborum. Sit ex ipsum labore exercitation magna mollit nostrud voluptate nulla magna ad excepteur. Exercitation deserunt dolor qui ut duis nostrud non aute. Fugiat veniam esse laboris eu fugiat veniam consequat esse proident aute commodo cillum ipsum. Aliqua incididunt deserunt voluptate reprehenderit proident id.\r\n",
    },
    {
      _id: "646d3fa9366496f487957592",
      image: "https://picsum.photos/id/19/200/300",
      price: 408,
      discount: 66,
      name: "Shirt",
      about:
        "Lorem laboris amet exercitation id adipisicing ea excepteur aliquip veniam in ullamco. Cupidatat deserunt veniam occaecat duis dolor Lorem occaecat. Laborum cillum labore aliquip laborum. Magna pariatur sint consectetur elit pariatur pariatur laboris nostrud voluptate non consequat. Excepteur est officia nisi ut consequat qui nisi et minim incididunt dolore nisi. Magna dolor laboris nisi magna cupidatat minim aliqua voluptate sint.\r\n",
    },
    {
      _id: "646d3fa9c20777408ef6beb8",
      image: "https://picsum.photos/id/44/200/300",
      price: 395,
      discount: 67,
      name: "Sweater",
      about:
        "Enim ullamco velit ullamco ut eu pariatur minim fugiat. Cillum nostrud incididunt eu excepteur commodo adipisicing commodo aute est elit. Tempor officia sunt ipsum ad excepteur Lorem reprehenderit do excepteur Lorem eiusmod id nulla duis. Cupidatat ipsum duis quis velit dolor.\r\n",
    },
    {
      _id: "646d3fa9aa87299b5f76d47a",
      image: "https://picsum.photos/id/71/200/300",
      price: 364,
      discount: 35,
      name: "T-Shirt",
      about:
        "Anim officia Lorem irure aliquip eiusmod laborum nisi duis occaecat Lorem ea esse. Cupidatat id eiusmod ad magna enim. Cillum est officia irure deserunt commodo voluptate sit aliqua commodo fugiat adipisicing labore quis. Laboris est cupidatat culpa Lorem incididunt laboris laborum exercitation dolore nostrud ex. Pariatur cillum incididunt cillum nulla ullamco et laborum in labore dolor enim. Do eu nulla labore esse deserunt incididunt qui nisi aliqua id anim.\r\n",
    },
    {
      _id: "646d3fa978a2db956451fe29",
      image: "https://picsum.photos/id/24/200/300",
      price: 146,
      discount: 39,
      name: "Pant",
      about:
        "Sit dolore cupidatat cillum labore est consectetur cillum anim dolore minim sunt tempor nulla. Eu ea commodo sint eiusmod reprehenderit officia mollit aute Lorem voluptate incididunt veniam. Sit adipisicing anim laborum magna labore. Laborum esse pariatur consectetur ullamco voluptate. Cupidatat qui laboris sunt nisi voluptate anim consectetur tempor id consequat nostrud. Ea sint pariatur commodo nostrud ipsum sunt mollit magna aute dolor esse excepteur exercitation.\r\n",
    },
    {
      _id: "646d3fa9e23f21609d38fa1e",
      image: "https://picsum.photos/id/47/200/300",
      price: 304,
      discount: 74,
      name: "Sweater",
      about:
        "Dolore excepteur amet irure consectetur dolore dolore ullamco elit velit qui. Laborum commodo ad tempor sit eiusmod qui amet elit. Adipisicing nisi aliquip id adipisicing irure tempor aliqua. Consectetur labore ut nulla id id ea. Ad enim officia ut magna ea eiusmod cillum consectetur ad.\r\n",
    },
    {
      _id: "646d3fa9623d124c2a33a8ec",
      image: "https://picsum.photos/id/58/200/300",
      price: 397,
      discount: 36,
      name: "Pant",
      about:
        "Dolore exercitation velit proident eiusmod occaecat duis exercitation. Elit sunt id aliqua duis. Quis voluptate proident in culpa Lorem nostrud nisi exercitation Lorem laboris magna aute. Duis aliqua consequat adipisicing et anim proident deserunt non et ex. Aute nostrud in est duis nostrud id nulla officia fugiat aliquip.\r\n",
    },
    {
      _id: "646d3fa9b337f1728898ae34",
      image: "https://picsum.photos/id/65/200/300",
      price: 268,
      discount: 50,
      name: "Pant",
      about:
        "Mollit ullamco labore reprehenderit cillum cillum aliquip nulla sit aute amet laboris. Amet mollit officia ea cupidatat nulla officia amet nulla enim mollit elit dolore enim adipisicing. Enim ut anim ut occaecat nulla. Nisi labore occaecat ipsum aliqua consectetur aliquip aliqua pariatur anim. Mollit commodo commodo incididunt aute tempor et nisi consequat officia proident et amet. Qui ullamco tempor fugiat qui excepteur minim pariatur ad minim eiusmod cupidatat enim.\r\n",
    },
    {
      _id: "646d3fa9d22a4a5d7e942e26",
      image: "https://picsum.photos/id/33/200/300",
      price: 90,
      discount: 74,
      name: "T-Shirt",
      about:
        "Ea adipisicing enim consectetur aute irure ad cupidatat cillum duis Lorem. Anim cupidatat cillum ad occaecat qui officia do tempor. Enim anim ea amet sit voluptate. Sunt est dolor ut laborum velit exercitation commodo voluptate aliqua id ea ad officia qui. Enim consectetur excepteur eiusmod reprehenderit reprehenderit in et proident enim sint excepteur esse excepteur cillum.\r\n",
    },
    {
      _id: "646d3fa930b0f359d25f86ae",
      image: "https://picsum.photos/id/41/200/300",
      price: 151,
      discount: 41,
      name: "Coats",
      about:
        "Elit fugiat laboris do anim. Eu nulla ipsum qui proident. Id amet labore aute mollit eiusmod minim ea nisi eiusmod.\r\n",
    },
    {
      _id: "646d3fa9fb467353699391d9",
      image: "https://picsum.photos/id/93/200/300",
      price: 377,
      discount: 73,
      name: "Sweater",
      about:
        "Officia proident laborum duis nisi duis qui exercitation est irure nostrud. Laboris do aute consectetur eiusmod sit quis qui nulla nulla. Ullamco consequat tempor nostrud reprehenderit.\r\n",
    },
    {
      _id: "646d3fa91dcaa10928741858",
      image: "https://picsum.photos/id/68/200/300",
      price: 156,
      discount: 73,
      name: "T-Shirt",
      about:
        "Non exercitation sit officia cillum non commodo. Exercitation quis tempor ad tempor laboris quis tempor. Reprehenderit irure labore non qui incididunt veniam dolore quis tempor ea ea dolor. Irure ipsum aute enim velit exercitation laboris id.\r\n",
    },
    {
      _id: "646d3fa9c2d2877c9b49995a",
      image: "https://picsum.photos/id/23/200/300",
      price: 212,
      discount: 59,
      name: "T-Shirt",
      about:
        "Elit aliqua fugiat aliqua ea sunt do veniam occaecat. Dolore duis anim ullamco commodo voluptate sint. Deserunt deserunt ea nisi non minim commodo ut.\r\n",
    },
  ]);
  const getProducts = () => {
    return productList.map((item, index) => (
      <ProductCard navigation={navigation} item={item} key={index}/>
    ));
  };
  return (
    <View style={homeStyles.productList}>
      <View style={homeStyles.bothProduct}>{getProducts()}</View>
    </View>
  );
};