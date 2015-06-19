﻿/*global define */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true,indent:4 */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define([], function () {
    return {
        /*  appSetting contains application configuration */
        // ------------------------------------------------------------------------------------------------------------------------
        // APPLICATION SETTINGS
        // ------------------------------------------------------------------------------------------------------------------------
        // Set parameters to define will look through color, image, and tite selection.
        // Set application title
        ApplicationName: "Briefing Book Gallery",

        // Set application icon path
        ApplicationIcon: "themes/images/mapbook-app-icon.png",

        // Set application Favicon path 
        ApplicationFavicon: "themes/images/mapbook-favicon.ico",

        // Set application home screen path (options are: home-icon-blue.ico and home-icon-grey.ico)
        AppHomeScreenIcon: "themes/images/home-icon-blue.ico",

        // Set theme for application (options are: grey or blue.)
        ApplicationTheme: "blue",

        // Set Briefing Book Cover icon
        // Options are: Grey Default Image "map-book-bg-grey.png" or Blue Default Image "map-book-bg.png"
        BriefingBookCoverIcon: "themes/images/map-book-bg.png",

        // Set application mode to true to allow users to View, Create and Edit books.
        // Set application mode to false to allow users to View public and private books without editing options.
        AuthoringMode: true, // false: Viewing mode and true: Editable and\or viewing mode

        // ------------------------------------------------------------------------------------------------------------------------
        // ORGANIZATION SETTINGS
        // ------------------------------------------------------------------------------------------------------------------------
        // Set where Briefing Books are created and stored

        // Display Book Options: organization, all, group
        DisplayBook: "all",

        // Set group id of 'DisplayBook' is set to 'group'
        DisplayGroup: "",

        // The URL for your ArcGIS Online organization or Portal for ArcGIS site,
        // e.g., something like "https://myOrg.maps.arcgis.com" for an Online Organization
        PortalURL: "https://arcgis.com",

        // OAuth application id; This parameter is only required for ArcGIS organizational accounts using Enterprise Logins.Leave empty if you are not using Enterprise Logins
        OAuthAppid: "", // e.g., something like "AFTKRmv16wj14N3z"

        // The unique tag given to each book. This tag will determine which books are visible in the Briefing Book application.
        ConfigSearchTag: "",

        // ------------------------------------------------------------------------------------------------------------------------
        // OPTIONAL SETTINGS
        // ------------------------------------------------------------------------------------------------------------------------

        // cookie/local storage name  for storing user credential
        Credential: "esribriefingbookcredential",

        // Location of your proxy file
        ProxyURL: "/proxy/proxy.ashx",

        // max webmap count
        MaxWebMapCount: 100,

        // display no of webmap thumbnail in' Select webmap' dialog
        WebmapPerPage: 12,

        //set path for default webmap thumbnail
        DefaultWebmapThumbnail: "themes/images/not-available.png",

        // Sorting field
        SortField: 'owner', // Values:title | owner | avgRating |numViews| created | modified

        // sorting order
        SortOrder: 'asc', // Values: asc | desc

        // Video URL for YouTube
        YouTubeVideoUrl: "https://www.youtube.com/embed/",

        // Video URL for Esri
        EsriVideoUrl: "https://video.esri.com/iframe/",

        // Video URL for Vimeo
        VimeoVideoUrl: "https://player.vimeo.com/video/",

        // ------------------------------------------------------------------------------------------------------------------------
        // MODULE AND LAYOUT SETTINGS
        // ------------------------------------------------------------------------------------------------------------------------
        /* module Defaults contains default settings for each and every module */
        /* Cover page layout contains layout for index page*/
        CoverPageLayout: {
            title: "Briefing Book Title",
            name: "coverPageLayout1",
            columns: 2,
            columnWidth: [50, 50],
            content: [
                ["title", "subtitle", "author", "date", "logo"],
                ["webmap"]
            ],
            height: [
                [40, 100, 60, 50],
                [300]
            ],
            type: "CoverPage"

        },
        /* content page layout contains layout for content page */
        ContentPageLayouts: [{
            name: "ContentLayout1",
            columnWidth: [50, 50],
            columns: 2,
            templateIcon: "themes/images/content-layout1.png",
            selectedTemplateIcon: "themes/images/content-layout1-select.png",
            content: [
                ["text", "TOC"],
                ["webmap"]
            ],
            height: [
                [50, 200],
                [250]
            ],
            type: "ContentPage"
        }, {
            name: "ContentLayout2",
            columns: 2,
            columnWidth: [50, 50],
            templateIcon: "themes/images/content-layout2.png",
            selectedTemplateIcon: "themes/images/content-layout2-select.png",
            content: [
                ["webmap", "text"],
                ["TOC"]
            ],
            height: [
                [300, 100],
                [400]
            ]
        }, {
            name: "ContentLayout3",
            columns: 2,
            columnWidth: [50, 50],
            templateIcon: "themes/images/content-layout3.png",
            selectedTemplateIcon: "themes/images/content-layout3-select.png",
            content: [
                ["TOC"],
                ["text", "webmap"]
            ],
            height: [
                [300],
                [50, 250]
            ]
        }],

        /* book page layout contains layout for different pages of books */
        BookPageLayouts: [{
            name: "TwoColumnLayout",
            columnWidth: [40, 60],
            columns: 2,
            templateIcon: "themes/images/temp1.png",
            selectedTemplateIcon: "themes/images/temp1-select.png",
            content: [
                ["text"],
                ["webmap"]
            ],
            height: [
                [250],
                [250]
            ]
        }, {
            name: "MostlyText",
            columns: 2,
            columnWidth: [50, 50],
            templateIcon: "themes/images/temp2.png",
            selectedTemplateIcon: "themes/images/temp2-select.png",
            content: [
                ["webmap", "text"],
                ["text"]
            ],
            height: [
                [230, 30],
                [300]
            ]

        }, {
            name: "OneColumnLayout",
            columns: 1,
            columnWidth: [100],
            templateIcon: "themes/images/temp3.png",
            selectedTemplateIcon: "themes/images/temp3-select.png",
            content: [
                ["webmap", "text"]
            ],
            height: [
                [250, 50]
            ]

        }, {
            name: "DominantVisual",
            columns: 2,
            columnWidth: [30, 70],
            templateIcon: "themes/images/temp4.png",
            selectedTemplateIcon: "themes/images/temp4-select.png",
            content: [
                ["webmap", "text"],
                ["text"]
            ],
            height: [
                [230, 60],
                [335]
            ]
        }],

        ModuleDefaultsConfig: {
            "webmap": {
                map: '',
                type: "webmap",
                title: "webmapModuleTitleText",
                caption: "webmapModuleCaptionText",
                URL: '',
                height: 230 // in pixel
            },
            "title": {
                type: "text",
                text: "untitled",
                height: 30,
                uid: "title" // in pixel
            },
            "text": {
                type: "text",
                text: "textModuleDefaultText",
                height: 40 // in pixel
            },
            "HTML": {
                type: "HTML",
                HTML: "HTMLModuleDefaultText",
                height: 100 // in pixel
            },
            "image": {
                type: "image",
                URL: "",
                height: 100
            },
            "video": {
                type: "video",
                title: "videoModuleTitleText",
                caption: "videoModuleCaptionText",
                URL: '',
                height: 250 // in pixel
            },
            "flickr": {
                type: "flickr",
                username: '',
                title: '',
                caption: '',
                URL: '',
                tags: '',
                rows: 5,
                columns: 5,
                height: 250 // in pixel
            },
            "logo": {
                type: "logo",
                URL: "themes/images/logo-default.jpg",
                height: 50 // in pixel
            },
            "TOC": {
                type: "TOC",
                height: 200 // in pixel
            },
            "author": {
                text: "authorName",
                type: "text",
                uid: "Author",
                height: 50  // in pixel
            },
            "date": {
                text: "dateModuleText",
                type: "text",
                uid: "date",
                height: 20  // in pixel
            },
            "subtitle": {
                type: "text",
                text: "subtitleModuleText",
                height: 40  // in pixel
            }
        },

        DefaultModuleIcons: {
            "webmap": {
                type: "webmap",
                URL: "themes/images/map-icon.png"
            },
            "image": {
                type: "image",
                URL: "themes/images/image-icon.png"
            },
            "logo": {
                type: "logo",
                URL: "themes/images/image-icon.png"
            },
            "text": {
                type: "text",
                URL: "themes/images/text-icon.png"
            },
            "HTML": {
                type: "HTML",
                URL: "themes/images/html-icon.png"
            },
            "video": {
                type: "video",
                URL: "themes/images/video-icon.png"
            },
            "flickr": {
                type: "flickr",
                URL: "themes/images/flickr-icon.png"
            }
        },


        // Set visual cues to be displayed in authoring mode to illustrate when the book will require scrolling on tablet devices. 

        DeviceResolution: [{
            devicename: "iPad",
            width: 1024,
            height: 768
        }, {
            devicename: "Android",
            width: 1280,
            height: 800
        }]

    };

});
