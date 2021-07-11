import {Product} from "@/interfaces/Product";

export default {

    getProducts(): Promise<{ data: Product[] }> {
        return fetch('/data/data.json')
            .then((response: Response) => response.json());
    }

}