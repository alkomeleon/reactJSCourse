export function formatTimeStrings(strings=[]) {
    if (strings?.length > 1) {
        return `${strings[0]} - ${strings[strings.length - 1]}`
    }

    if (strings?.length) {
        return `${strings[0]} - Till tomorrow`
    }

    return `None`;
}



describe("formatTimeStringsTest", ()=>{
    it("call with numbers array", ()=>{
        const result = formatTimeStrings([1,2,3,4]);

        expect(result).toBe("1 - 4");
    });

    it("call with one number", ()=>{
        const result = formatTimeStrings([1]);

        expect(result).toBe("1 - Till tomorrow");
    });

    it("call without number", ()=>{
        const result = formatTimeStrings(null);

        expect(result).toBe("None");
    });
})