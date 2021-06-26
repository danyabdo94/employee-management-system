import { eEmployeeState, iEmployee } from "./../common/models";

const mockedEmployees: iEmployee[] = [
    {
        id: 1,
        email: "jaddlestone0@guardian.co.uk",
        name: "Jessamyn Addlestone",
        country: "GB",
        state: eEmployeeState.ADDED,
    },
    {
        id: 2,
        email: "ptace1@g.co",
        name: "Pete Tace",
        country: "HN",
        state: eEmployeeState.ACTIVE,
    },
    {
        id: 3,
        email: "rgiampietro2@squarespace.com",
        name: "Rochella Giampietro",
        country: "PE",
        state: eEmployeeState.APPROVED,
    },
    {
        id: 4,
        email: "jluberti3@blogtalkradio.com",
        name: "Janice Luberti",
        country: "UA",
        state: eEmployeeState.INACTIVE,
    },
    {
        id: 5,
        email: "nstave4@intel.com",
        name: "Nicol Stave",
        country: "BR",
        state: eEmployeeState.IN_CHECK,
    },
    {
        id: 6,
        email: "mpaulon5@deliciousdays.com",
        name: "Matt Paulon",
        country: "ES",
        state: eEmployeeState.APPROVED,
    },
    {
        id: 7,
        email: "ounworth6@nifty.com",
        name: "Odelia Unworth",
        country: "CZ",
        state: eEmployeeState.ADDED,
    },
    {
        id: 8,
        email: "pperillio7@businessinsider.com",
        name: "Patin Perillio",
        country: "RU",
        state: eEmployeeState.ADDED,
    },
];

export default mockedEmployees;
