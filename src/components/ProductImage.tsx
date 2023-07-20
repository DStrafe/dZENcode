import React, {Suspense} from "react";

export const ProductImage = ({ imageUrl, className }: any) => (
    <Suspense>
        <div className={className}>
            <img src={imageUrl} className="img-fluid object-fit-cover overflow-hidden w-75" alt="..." />
        </div>
    </Suspense>
);