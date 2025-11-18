const formatValue = (inputValue: string | number | boolean): (string | number | boolean) => {
    if(typeof inputValue === "string"){
        return inputValue.toUpperCase()
    }else if(typeof inputValue === "number"){
        return inputValue * 10;
    }else{
        return !inputValue
    }
}




const getLength = (inputValue: string | any[]): number => {
    if(typeof inputValue === 'string'){
        return inputValue.length;
    }
    if(Array.isArray(inputValue)){
        return inputValue.length;
    }
    return 0;
}




class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    };

    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}




const filterByRating = (inputValue: { title: string, rating: number }[]): { title: string, rating: number }[] => {
    return inputValue.filter(item => item?.rating >= 4);
}





const filterActiveUsers = (inputValue: { id: number, name: string, email: string, isActive: boolean }[]): { id: number, name: string, email: string, isActive: boolean }[] => {
    return inputValue.filter(activeUser => activeUser?.isActive === true)
}




interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (inputValue: Book): string => {
    const availabilityStatus = inputValue.isAvailable ? 'Yes' : 'No';
    return `Title: ${inputValue.title}, Author: ${inputValue.author}, Published: ${inputValue.publishedYear}, Available: ${availabilityStatus}`;
}




const getUniqueValues = (value01: (string | number)[], value02: (string | number)[]): (string | number)[] => {
    const result: (string | number)[] = [];

    for (const value of value01) {
        if (!result.includes(value)) result.push(value);
    }
    for (const value of value02) {
        if (!result.includes(value)) result.push(value);
    }
    return result;
}




const calculateTotalPrice = (inputValue: { name: string; price: number; quantity: number; discount?: number }[]): number => {
    if (inputValue.length === 0) return 0;

    return inputValue.map((product) => {
      let total = product.price * product.quantity;
      if (product.discount !== undefined) {
        total -= (total * product.discount) / 100;
      }
      return total;
    }).reduce((sum, item) => sum + item, 0);
}
