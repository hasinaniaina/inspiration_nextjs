export async function getTags() {
    const tags = await fetch("https://api.quotable.io/tags");

    if (!tags) {
        throw new Error("No tag found");
    }

    return await tags.json();

}

export async function getQuotes() {
    const quotes = await fetch("https://api.quotable.io/quotes");

    if (!quotes) {
        throw new Error("No tag found");
    }

    return await quotes.json();
}

export async function getQuotesRelatedToTagName(tagName: string) {
    const quotes = await fetch("https://api.quotable.io/quotes?tags=" + tagName);

    if (!quotes) {
        throw new Error("No tag found");
    }

    return await quotes.json();
}