import {
  accountIcon,
  domainIcon,
  helpIcon,
  vpsIcon
} from "./icons/icons";
import { IMenuSettings } from "./types";

export const tabButtons: IMenuSettings = {
  'АККАУНТ': accountIcon,
  'VSP': vpsIcon,
  'ДОМЕНЫ': domainIcon,
  'БОРТОВОЙ ЖУРНАЛ': helpIcon
};

export const url = 'https://sweb.ru/export/turbojournal/';