import { eEmployeeState, iEmployee } from "./../common/models";
export const STATES = {
    ADDED: {
        on: { NEXT: "IN-CHECK" },
    },
    "IN-CHECK": {
        on: { NEXT: "APPROVED", PREVIOUS: "ADDED" },
    },
    APPROVED: {
        on: { NEXT: "ACTIVE", PREVIOUS: "IN-CHECK" },
    },
    ACTIVE: {
        on: { NEXT: "INACTIVE", PREVIOUS: "APPROVED" },
    },
    INACTIVE: {
        on: { NEXT: "ACTIVE", PREVIOUS: "APPROVED" },
    },
};

const mockedEmployees: iEmployee[] = [
    {
        id: 1,
        email: "jaddlestone0@guardian.co.uk",
        name: "Jessamyn Addlestone",
        countryCode: "GB",
        position: "Senior Frontend Engineer",
        state: eEmployeeState.ADDED,
    },
    {
        id: 2,
        email: "ptace1@g.co",
        name: "Pete Tace",
        countryCode: "HN",
        position: "Senior Backend Engineer",
        state: eEmployeeState.ACTIVE,
    },
    {
        id: 3,
        email: "rgiampietro2@squarespace.com",
        name: "Rochella Giampietro",
        countryCode: "PE",
        position: "Senior FullStack Engineer",
        state: eEmployeeState.APPROVED,
    },
    {
        id: 4,
        email: "jluberti3@blogtalkradio.com",
        name: "Janice Luberti",
        countryCode: "UA",
        position: "Senior Devops Engineer",
        state: eEmployeeState.INACTIVE,
    },
    {
        id: 5,
        email: "nstave4@intel.com",
        name: "Nicol Stave",
        countryCode: "BR",
        position: "Senior QA Engineer",
        state: eEmployeeState.IN_CHECK,
    },
    {
        id: 6,
        email: "mpaulon5@deliciousdays.com",
        name: "Matt Paulon",
        countryCode: "ES",
        position: "Tech Lead",
        state: eEmployeeState.APPROVED,
    },
    {
        id: 7,
        email: "ounworth6@nifty.com",
        name: "Odelia Unworth",
        countryCode: "CZ",
        position: "EM",
        state: eEmployeeState.ADDED,
    },
    {
        id: 8,
        email: "pperillio7@businessinsider.com",
        name: "Patin Perillio",
        countryCode: "RU",
        position: "PM",
        state: eEmployeeState.ADDED,
    },
];

export default mockedEmployees;
