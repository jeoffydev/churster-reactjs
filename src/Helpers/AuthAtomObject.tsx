import { atom } from 'jotai';
import { IUserDetails } from '../Types/chursterType';
import { IOrganisation } from './../Types/chursterType';

export const userDetailsAtom = atom<IUserDetails | undefined>(undefined);
export const userOrganisationAtom = atom<IOrganisation | undefined>(undefined);