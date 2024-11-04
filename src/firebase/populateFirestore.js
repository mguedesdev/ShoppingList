import { addCategoriesToFirestore } from './firestore';


const categoriesData = [
  {
    name: "Alimentos Básicos",
    subcategories: [
      {
        name: "Grãos e Cereais",
        items: [
          "Arroz branco",
          "Arroz integral",
          "Arroz parboilizado",
          "Arroz arbóreo para risoto",
          "Feijão preto",
          "Feijão carioca",
          "Feijão branco",
          "Feijão fradinho",
          "Lentilha",
          "Grão-de-bico",
          "Ervilha seca",
          "Milho para pipoca",
        ],
      },
      {
        name: "Farinha e Derivados",
        items: [
          "Farinha de trigo branca",
          "Farinha de trigo integral",
          "Farinha de milho",
          "Fubá",
          "Farinha de mandioca",
          "Farinha de rosca",
          "Amido de milho (maizena)",
        ],
      },
      {
        name: "Massas e Macarrão",
        items: [
          "Espaguete",
          "Talharim",
          "Penne",
          "Fusilli",
          "Lasanha",
          "Nhoque",
          "Macarrão instantâneo",
          "Capeletti",
          "Ravioli",
        ],
      },
      {
        name: "Caldo e Temperos Prontos",
        items: [
          "Caldo de carne",
          "Caldo de frango",
          "Caldo de legumes",
          "Caldo de peixe",
          "Cubos de tempero",
          "Temperos secos",
        ],
      },
      {
        name: "Óleos e Gorduras",
        items: [
          "Óleo de soja",
          "Óleo de milho",
          "Óleo de canola",
          "Azeite de oliva extra virgem",
          "Azeite de oliva virgem",
          "Manteiga",
          "Margarina",
          "Banha de porco",
        ],
      },
      {
        name: "Açúcares e Adoçantes",
        items: [
          "Açúcar refinado",
          "Açúcar mascavo",
          "Açúcar demerara",
          "Açúcar cristal",
          "Mel",
          "Adoçante stevia",
          "Adoçante sucralose",
        ],
      },
      {
        name: "Sal e Condimentos",
        items: [
          "Sal refinado",
          "Sal grosso",
          "Sal rosa",
          "Pimenta do reino",
          "Colorau",
          "Páprica doce",
          "Páprica picante",
          "Orégano",
          "Manjericão",
          "Salsa",
          "Tomilho",
        ],
      },
    ],
  },
  {
    name: "Laticínios e Ovos",
    subcategories: [
      {
        name: "Leite e Derivados",
        items: [
          "Leite integral",
          "Leite desnatado",
          "Leite semidesnatado",
          "Leite em pó",
          "Leite condensado",
          "Creme de leite",
        ],
      },
      {
        name: "Queijos",
        items: [
          "Mussarela",
          "Queijo prato",
          "Parmesão",
          "Queijo minas",
          "Queijo cottage",
          "Cream cheese",
          "Requeijão",
        ],
      },
      {
        name: "Iogurtes e Bebidas Lácteas",
        items: [
          "Iogurte natural",
          "Iogurte grego",
          "Iogurte com sabores",
          "Bebidas lácteas de morango",
          "Bebidas lácteas de chocolate",
        ],
      },
      {
        name: "Outros",
        items: [
          "Manteiga",
          "Creme de leite fresco",
          "Nata",
        ],
      },
      {
        name: "Ovos",
        items: [
          "Ovos brancos",
          "Ovos vermelhos",
          "Ovos caipira",
        ],
      },
    ],
  },
  {
    name: "Proteínas",
    subcategories: [
      {
        name: "Carnes",
        items: [
          "Alcatra",
          "Contrafilé",
          "Patinho",
          "Carne moída",
          "Filé mignon suíno",
          "Lombo",
          "Costelinha",
          "Carne de cordeiro",
          "Carne de vitela",
        ],
      },
      {
        name: "Frango e Aves",
        items: [
          "Frango inteiro",
          "Peito de frango",
          "Coxa de frango",
          "Asa de frango",
          "Filé de frango",
          "Peru",
          "Chester",
          "Pato",
        ],
      },
      {
        name: "Peixes e Frutos do Mar",
        items: [
          "Salmão",
          "Tilápia",
          "Merluza",
          "Peixes congelados",
          "Filés de peixe",
          "Camarão",
          "Lula",
          "Polvo",
          "Mexilhões",
        ],
      },
      {
        name: "Embutidos",
        items: [
          "Presunto",
          "Mortadela",
          "Salame",
          "Peito de peru",
          "Linguiça toscana",
          "Linguiça calabresa",
          "Linguiça de frango",
        ],
      },
    ],
  },
  {
    name: "Pães e Produtos de Panificação",
    subcategories: [
      {
        name: "Pães",
        items: [
          "Pão de forma",
          "Pão francês",
          "Pão integral",
          "Pão de hambúrguer",
          "Pão sírio",
          "Pão de alho",
        ],
      },
      {
        name: "Biscoitos",
        items: [
          "Biscoitos cream cracker",
          "Bolachas recheadas",
          "Biscoitos amanteigados",
        ],
      },
      {
        name: "Outros",
        items: [
          "Torradas",
          "Croissants",
          "Pão doce",
        ],
      },
    ],
  },
  {
    name: "Grãos e Cereais",
    subcategories: [
      {
        name: "Grãos e Cereais",
        items: [
          "Aveia em flocos",
          "Aveia em farelo",
          "Aveia instantânea",
          "Granola com frutas",
          "Granola sem açúcar",
          "Chia",
          "Linhaça",
          "Quinoa",
          "Flocos de milho",
          "Musli",
        ],
      },
    ],
  },
  {
    name: "Frutas, Verduras e Legumes",
    subcategories: [
      {
        name: "Frutas",
        items: [
          "Banana",
          "Maçã",
          "Laranja",
          "Abacaxi",
          "Manga",
          "Morango",
          "Uva",
          "Melancia",
          "Melão",
          "Mamão",
          "Kiwi",
          "Pera",
          "Uva-passa",
          "Damasco",
          "Ameixa seca",
        ],
      },
      {
        name: "Verduras e Folhas",
        items: [
          "Alface crespa",
          "Alface lisa",
          "Alface americana",
          "Rúcula",
          "Agrião",
          "Espinafre",
          "Couve",
          "Acelga",
        ],
      },
      {
        name: "Legumes",
        items: [
          "Tomate",
          "Cenoura",
          "Batata",
          "Batata-doce",
          "Abobrinha",
          "Berinjela",
          "Cebola",
          "Alho",
          "Pimentão verde",
          "Pimentão vermelho",
          "Pimentão amarelo",
        ],
      },
    ],
  },
  {
    name: "Congelados",
    subcategories: [
      {
        name: "Vegetais Congelados",
        items: [
          "Milho",
          "Ervilha",
          "Brócolis",
          "Couve-flor",
          "Espinafre",
        ],
      },
      {
        name: "Proteínas Congeladas",
        items: [
          "Filés de peixe",
          "Camarão",
          "Hambúrgueres",
          "Almôndegas",
        ],
      },
      {
        name: "Pratos Prontos Congelados",
        items: [
          "Lasanhas",
          "Pizzas",
          "Massas",
          "Vegetais cozidos",
        ],
      },
    ],
  },
  {
    name: "Bebidas",
    subcategories: [
      {
        name: "Bebidas",
        items: [
          "Água mineral com gás",
          "Água mineral sem gás",
          "Suco natural",
          "Suco néctar",
          "Suco concentrado",
          "Refrigerante",
          "Chá pronto",
          "Água de coco",
          "Café solúvel",
          "Café em grão",
          "Café em cápsulas",
          "Achocolatado",
          "Leite de coco",
          "Leite de amêndoas",
        ],
      },
    ],
  },
  {
    name: "Higiene Pessoal",
    subcategories: [
      {
        name: "Cabelo e Corpo",
        items: [
          "Shampoo",
          "Condicionador",
          "Máscara de hidratação",
          "Sabonete líquido",
          "Sabonete em barra",
          "Gel de banho",
          "Loção hidratante",
          "Protetor solar",
        ],
      },
      {
        name: "Higiene Bucal",
        items: [
          "Creme dental",
          "Escova de dentes",
          "Fio dental",
          "Enxaguante bucal",
        ],
      },
      {
        name: "Outros Itens",
        items: [
          "Papel higiênico",
          "Lenço umedecido",
          "Absorventes",
          "Desodorante",
          "Algodão",
        ],
      },
    ],
  },
  {
    name: "Produtos de Limpeza",
    subcategories: [
      {
        name: "Para Louças e Cozinha",
        items: [
          "Detergente",
          "Esponja",
          "Luvas de limpeza",
          "Desengordurante",
          "Limpa forno",
        ],
      },
      {
        name: "Para Roupas",
        items: [
          "Sabão em pó",
          "Sabão líquido",
          "Amaciante",
          "Tira manchas",
          "Alvejante",
          "Removedor de ferrugem",
        ],
      },
      {
        name: "Para Casa",
        items: [
          "Desinfetante",
          "Água sanitária",
          "Limpa-vidros",
          "Limpa-móveis",
          "Lustra móveis",
        ],
      },
    ],
  },
  {
    name: "Higiene da Casa",
    subcategories: [
      {
        name: "Higiene da Casa",
        items: [
          "Sacos de lixo 1kg",
          "Sacos de lixo 3kg",
          "Sacos de lixo 5kg",
          "Papel toalha",
          "Toalhas de papel",
          "Desinfetante para banheiro",
          "Limpador de piso",
          "Esponjas",
          "Vassouras",
          "Panos multiuso",
        ],
      },
    ],
  },
  {
    name: "Snacks e Petiscos",
    subcategories: [
      {
        name: "Salgadinhos",
        items: [
          "Chips de batata",
          "Pipoca de micro-ondas",
          "Palitos de queijo",
          "Snacks saudáveis (vegetais, assados)",
        ],
      },
      {
        name: "Frutas e Oleaginosas",
        items: [
          "Amendoim",
          "Castanha de caju",
          "Castanha do Pará",
          "Nozes",
          "Pistache",
          "Amêndoas",
          "Frutas cristalizadas",
        ],
      },
      {
        name: "Doces e Chocolates",
        items: [
          "Chocolates",
          "Balas",
          "Barras de cereal",
          "Barras de chocolate",
          "Bombons",
          "Mix de castanhas e frutas",
        ],
      },
    ],
  },
  {
    name: "Condimentos e Molhos",
    subcategories: [
      {
        name: "Molhos Prontos",
        items: [
          "Molho de tomate",
          "Extrato de tomate",
          "Ketchup",
          "Mostarda",
          "Molho barbecue",
          "Molho de pimenta",
          "Maionese",
        ],
      },
      {
        name: "Vinagres e Molhos Especiais",
        items: [
          "Vinagre de maçã",
          "Vinagre balsâmico",
          "Vinagre branco",
          "Shoyu",
          "Molho inglês",
          "Molho agridoce",
        ],
      },
    ],
  },
  {
    name: "Utensílios Descartáveis",
    subcategories: [
      {
        name: "Utensílios",
        items: [
          "Copos descartáveis",
          "Pratos descartáveis",
          "Talheres descartáveis",
          "Guardanapos",
          "Toalhas de papel",
          "Palitos de dente",
        ],
      },
    ],
  },
];

export default categoriesData;



addCategoriesToFirestore(categoriesData);
