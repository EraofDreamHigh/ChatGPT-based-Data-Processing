export const baseURL='https://api.spoonacular.com/';
export const API_KEY= '2bc00915d5b4404289069127834a2e28';

export const sReceipe = {
query:'pasta',
cuisine:'italian',
excludeCuisine:'greek',
diet:'vegetarian',
intolerances:'gluten',
equipment:'pan',
includeIngredients:'tomato, cheese',
excludeIngredients:'eggs',
type:'main course',
instructionsRequired:true,
fillIngredients:false,
addRecipeInformation:false,
addRecipeNutrition:false,
author:'coffeebean',
tags:'myCustomTag',
recipeBoxId:2468,
titleMatch:'Crock Pot',
maxReadyTime:20,
ignorePantry:true,
sort:'calories',
sortDirection:'asc',
minCarbs:0,
maxCarbs:100,
minProtein:0,
maxProtein:100,
minCalories:0,
maxCalories:100,
minFat:0,
maxFat:100,
minAlcohol:0,
maxAlcohol:100,
minCaffeine:0,
maxCaffeine:100,
minCopper:0,
maxCopper:100,
minCalcium:0,
maxCalcium:100,
minCholine:0,
maxCholine:100,
minCholesterol:0,
maxCholesterol:100,
minFluoride:0,
maxFluoride:100,
minSaturatedFat:0,
maxSaturatedFat:100,
minVitaminA:0,
maxVitaminA:100,
minVitaminC:0,
maxVitaminC:100,
minVitaminD:0,
maxVitaminD:100,
minVitaminE:0,
maxVitaminE:100,
minVitaminK:0,
maxVitaminK:100,
minVitaminB1:0,
maxVitaminB1:100,
minVitaminB2:0,
maxVitaminB2:100,
minVitaminB5:0,
maxVitaminB5:100,
minVitaminB3:0,
maxVitaminB3:100,
minVitaminB6:0,
maxVitaminB6:100,
minVitaminB12:0,
maxVitaminB12:100,
minFiber:0,
maxFiber:100,
minFolate:0,
maxFolate:100,
minFolicAcid:0,
maxFolicAcid:100,
minIodine:0,
maxIodine:100,
minIron:0,
maxIron:100,
minMagnesium:0,
maxMagnesium:100,
minManganese:0,
maxManganese:100,
minPhosphorus:0,
maxPhosphorus:100,
minPotassium:0,
maxPotassium:100,
minSelenium:0,
maxSelenium:100,
minSodium:0,
maxSodium:100,
minSugar:0,
maxSugar:100,
minZinc:0,
maxZinc:100,
offset:0,
number:10,
limitLicense:true,
}

export const sReceipebyNutrients = {
    minCarbs:0,
    maxCarbs:100,
    minProtein:0,
    maxProtein:100,
    minCalories:0,
    maxCalories:100,
    minFat:0,
    maxFat:100,
    minAlcohol:0,
    maxAlcohol:100,
    minCaffeine:0,
    maxCaffeine:100,
    minCopper:0,
    maxCopper:100,
    minCalcium:0,
    maxCalcium:100,
    minCholine:0,
    maxCholine:100,
    minCholesterol:0,
    maxCholesterol:100,
    minFluoride:0,
    maxFluoride:100,
    minSaturatedFat:0,
    maxSaturatedFat:100,
    minVitaminA:0,
    maxVitaminA:100,
    minVitaminC:0,
    maxVitaminC:100,
    minVitaminD:0,
    maxVitaminD:100,
    minVitaminE:0,
    maxVitaminE:100,
    minVitaminK:0,
    maxVitaminK:100,
    minVitaminB1:0,
    maxVitaminB1:100,
    minVitaminB2:0,
    maxVitaminB2:100,
    minVitaminB5:0,
    maxVitaminB5:100,
    minVitaminB3:0,
    maxVitaminB3:100,
    minVitaminB6:0,
    maxVitaminB6:100,
    minVitaminB12:0,
    maxVitaminB12:100,
    minFiber:0,
    maxFiber:100,
    minFolate:0,
    maxFolate:100,
    minFolicAcid:0,
    maxFolicAcid:100,
    minIodine:0,
    maxIodine:100,
    minIron:0,
    maxIron:100,
    minMagnesium:0,
    maxMagnesium:100,
    minManganese:0,
    maxManganese:100,
    minPhosphorus:0,
    maxPhosphorus:100,
    minPotassium:0,
    maxPotassium:100,
    minSelenium:0,
    maxSelenium:100,
    minSodium:0,
    maxSodium:100,
    minSugar:0,
    maxSugar:100,
    minZinc:0,
    maxZinc:100,
    offset:0,
    number:10,
    random:false,
    limitLicense:true,
    }

export const sReceipesbyIngredients = {
    ingredients: ['apples','flour','sugar'],
    number: 10,
    limitLicense: true,
    ranking: 1,
    ignorePantry: true,
}

export const gReceipeInfo = {
    id: 716429,
    includeNutrition: false,
}

export const gRecipeInfoBulk = {
    ids: '715538,716429',
    includeNutrition: false
}

export const gSimilarRecipes = {
    id: 715538,
    number: 1,
    limitLicense: true,
}

export const sIngredients = {
    query: 'pasta',
    addChildren: true,
    minProteinPercent: 10,
    maxProteinPercent: 90,
    minFatPercent: 10,
    maxFatPercent: 90,
    minCarbsPercent: 10,
    maxCarbsPercent: 90,
    metaInformation: false,
    intolerances: 'egg',
    sort: 'calories',
    sortDirection: 'asc',
    language: 'en',
    offset: 0,
    number: 10,
}

export const gIngredientInfo = {
    id: 9266,
    amount: 150,
    unit: 'grams'
}

export const sGroceryProducts = {
    query: 'greek yog',
    minCalories: 50,
    maxCalories: 800,
    minCarbs:10,
    maxCarbs:100,
    minProtein: 10,
    maxProtein: 100,
    minFat: 1,
    maxFat: 100,
    addProductInformation:false,
    offset:0,
    number:10
}

export const gProductInfo = {
    id: 22347
}