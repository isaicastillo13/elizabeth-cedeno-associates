import Header from "@/components/layout/Header";
import Hero from "@/components/blog/Hero";
import ArticleCard from "@/components/blog/ArticleCard";

export default function BlogPage() {
    return (
        <>
        <Header />
        <Hero />
        <main className="container p-4 mx-auto">
            <ArticleCard
                colRow="row"
                imgSrc="https://placehold.co/500x300/000000/FFF"
                title="Abogados especialistas en derecho administrativo y público en Panamá"
                description="Lorem ipsum dolor sit amet consectetur. Vitae porttitor praesent ipsum eros. Nunc adipiscing faucibus accumsan quis a ut libero magna. Sed elementum eu ultrices amet curabitur pellentesque quam. Scelerisque purus malesuada at sit. Purus sollicitudin lectus ultrices nulla cras tortor aenean egestas libero. Adipiscing donec id imperdiet mi."
                authorImgSrc="https://cdn-icons-png.flaticon.com/512/9203/9203764.png"
                authorName="John Doe"
                date="October 1, 2023"
                slug="como-cuidar-tu-sonrisa"

            />
            
            <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <ArticleCard
                colRow="col"
                imgSrc="https://placehold.co/500x300/000000/FFF"
                title="Abogados especialistas en derecho administrativo y público en Panamá"
                description="Lorem ipsum dolor sit amet consectetur. Vitae porttitor praesent ipsum eros. Nunc adipiscing faucibus accumsan quis a ut libero magna. Sed elementum eu ultrices amet curabitur pellentesque quam. Scelerisque purus malesuada at sit. Purus sollicitudin lectus ultrices nulla cras tortor aenean egestas libero. Adipiscing donec id imperdiet mi."
                authorImgSrc="https://cdn-icons-png.flaticon.com/512/9203/9203764.png"
                authorName="John Doe"
                date="October 1, 2023"
                slug="Abogados-especialistas-en-derecho-administrativo"
            />
            <ArticleCard
                colRow="col"
                imgSrc="https://placehold.co/500x300/000000/FFF"
                title="Abogados especialistas en derecho administrativo y público en Panamá"
                description="Lorem ipsum dolor sit amet consectetur. Vitae porttitor praesent ipsum eros. Nunc adipiscing faucibus accumsan quis a ut libero magna. Sed elementum eu ultrices amet curabitur pellentesque quam. Scelerisque purus malesuada at sit. Purus sollicitudin lectus ultrices nulla cras tortor aenean egestas libero. Adipiscing donec id imperdiet mi."
                authorImgSrc="https://cdn-icons-png.flaticon.com/512/9203/9203764.png"
                authorName="John Doe"
                date="October 1, 2023"
                slug="Abogados-especialistas-en-derecho-administrativo"

            />
                
            </section>
        </main>
        </>
    );
}