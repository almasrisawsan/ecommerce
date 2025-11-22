## Typescript

- Primitives and Inference
   let counter: number;
   let counter = 0; // inference

   let name = "Alex"; // TS infers string
   name = 10; // ERROR: Type 'number' is not assignable to type 'string'.

   let counter: number = 0; //with initial value

   let firstName: string = `John`;

   let pending: boolean;
   pending = true;

   let status: 'loading' | 'success' | 'error' = 'loading';
//////////////////////////////////

# Objects

let employee: object;

employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

let employee: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
} = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};
//////////////////////////////////

# arrays

let skills: string[] = [];

let scores : (string | number)[];
scores = ['Programming', 5, 'Software Design', 4];

//////////////////////////////////

# functions

function increment(counter: number) {
    return counter++; //return type is number
}

function add(a: number, b: number): number {
    return a + b;
}

///////////////////////////////////

# defining types

export interface Ingredient {
  name: string;
  quantity: string;
  unit: string;
}

export interface Recipe {
  id: number;
  title: string;
  description: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  
  // Array of complex types
  ingredients: Ingredient[];
  
  // Array of strings
  instructions: string[];
  
  content: Ingredient;
  // Optional property
  imageUrl?: string;
  
  // Union type for classification
  category: 'Breakfast' | 'Lunch' | 'Dinner' | 'Dessert';
}

///////////////////////////////////////

# component props

// Define the interface for this component's props

interface RecipeCardProps {
  recipe: Recipe; // Uses the interface defined earlier
  onViewDetails: (id: number) => void; // Typing a function prop
}

// Apply the interface to the component arguments
export function RecipeCard({ recipe, onViewDetails }: RecipeCardProps) {
    // ...
}

//////////////////////////////////////////

# hooks

const [name, setName] = useState('Bob'); // name is inferred as 'string'

// Example 1: Starting with null
const [user, setUser] = useState<User | null>(null);

// Example 2: Starting with an empty array
const [recipeList, setRecipeList] = useState<Recipe[]>([]);
