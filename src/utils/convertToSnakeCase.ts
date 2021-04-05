export default function convertToSnakeCase (str: string): string {
    return str.replace(/[a-z][A-Z]/g, (matched) => 
        `${matched.slice(0,1)}_${matched.slice(1).toLowerCase()}`
    ).toLowerCase();
}
