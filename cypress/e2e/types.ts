export type exampleResponse = {
    name: string,
    email: string,
    body: {
      fixtures: any[]
    }
  }
  
export type responseData =  exampleResponse & {
    isValid: true
  }
  
export interface object1 {
    body: object
  }
  
export interface object2 {
    name: string[]
    email: string
  }