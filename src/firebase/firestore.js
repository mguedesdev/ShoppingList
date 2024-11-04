import { doc, setDoc } from "firebase/firestore";
import { db } from './firebase';
import normalizeWord from "@/utils/normalizeWord";

const addCategoriesToFirestore = async (categoriesData) => {
  try {
    for (const category of categoriesData) {
      const categoryId = normalizeWord(category.name); 
      await setDoc(doc(db, "categories", categoryId), category);
    }
    console.log("Todas as categorias foram enviadas para o Firestore.");
  } catch (error) {
    console.error("Erro ao adicionar categorias: ", error);
  }
};

export { addCategoriesToFirestore };
