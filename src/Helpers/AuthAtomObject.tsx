import { atom } from 'jotai';
import { IEventTypes, IUserDetails } from '../Types/chursterType';
import { IOrganisation } from './../Types/chursterType';

export const userDetailsAtom = atom<IUserDetails | undefined>(undefined);
export const userOrganisationAtom = atom<IOrganisation | undefined>(undefined);
export const organisationEventsAtom = atom<IEventTypes | undefined>(undefined);
export const organisationIDAtom = atom<number | undefined>(undefined);
export const isAdminAtom = atom<boolean>(false);
export const isContractorAtom = atom<boolean>(false);
export const isMemberAtom = atom<boolean>(false);
export const appIsLoading = atom<boolean>(true);