"use client";
import Category from "@/component/Category/Category";
import TrackList from "@/component/TrackList/TrackList";
import "./catalog.css";
export default function Catalog() {




    return (
        <div className="container-list">
        <div className="List-truck">
            <Category />
            <TrackList />
        </div>
        </div>
    )

}
