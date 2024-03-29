export  interface ILoginForm {
  email: string;
  password: string;
}   

export  interface ICreateForm {
  email: string;
  password: string;
  name: string;
  organisation_id: number | undefined;
  access: number;
} 

export interface IUserOrganisation{
  id:  number;
  user_id:  number;
  org_id:  number;
  created_at:  string;
  updated_at:  string;
}

export interface IUserAccess{
  id:  number;
  user_id:  number;
  access_level:  number;
  created_at:  string;
  updated_at:  string;
}

export interface IUserDetails{ 
  id: number;
  name:string;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
  user_organisation:  IUserOrganisation;
  user_access:IUserAccess[];
}
export interface IOrganisation{
  id:  number;
  active:  number;
  org_name:  string;
  created_at:  string;
  updated_at:  string;
  description:  string;
  location:  string;
}

export interface IUserOrganisation{
  id:  number;
  user_id:  number;
  org_id:  number;
  created_at:  string;
  updated_at:  string;
  organisation:  IOrganisation 
} 

export interface IUser  { 
  jwt: string;
  userDetails: IUserDetails;
  userOrganisation:   IUserOrganisation
} 

export interface IUserOptions {  
  isAuthenticated: boolean;
  userID: string; 
  isEnabled: boolean;
}

export interface IEventTypes {
  id?: number;
  active: number | string;
  title: string;
  description: string;
  date: string;
} 

export interface ICreateEvent extends IEventTypes {
   organisation_id: number;
}

export const UserAccess = {
  admin: 1,
  constructor: 3,
  member: 2
}