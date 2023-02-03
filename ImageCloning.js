class Size {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

class Image {
    constructor(url, size) {
        this.url = url;
        this.size = size;
    }

    getUrl = () => {
        return this.url;
    }

    setUrl = (url) => {
        this.url = url;
    }

    setSize = (width, height) => {
        const sizeNew = new Size(width, height);
        this.size = sizeNew;
    }

    getSize = () => {
        return this.size;
    }

    cloneImage = () => {
        const url = this.url;
        const size = this.size;

        const imageNew = new Image(url, size);

        return imageNew;
    }
}