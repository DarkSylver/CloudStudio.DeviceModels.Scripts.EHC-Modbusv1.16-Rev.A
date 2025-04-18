function getConfiguration(config) {
    config.addressLabel = { en: "Serial Number", es: "Número de Serie" };
}

function getEndpoints(deviceAddress, endpoints) {
    //-------------------------------------------------------------------------------------------------------
    // Template de base para modificar y crear el resto.

    const templateOfTemplates = `<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="format-detection" content="telephone=no" />
    <title></title>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Roboto:wght@300&display=swap"
        rel="stylesheet" type="text/css" />
    <style type="text/css">
        /* Resets */
        .ReadMsgBody {
            width: 100%;
            background-color: #ebebeb;
        }

        .ExternalClass {
            width: 100%;
            background-color: #ebebeb;
        }

        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%;
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        body {
            -webkit-text-size-adjust: none;
            -ms-text-size-adjust: none;
        }

        body {
            margin: 0;
            padding: 0;
        }

        .yshortcuts a {
            border-bottom: none !important;
        }

        .rnb-del-min-width {
            min-width: 0 !important;
        }

        /* Add new outlook css start */
        .templateContainer {
            max-width: 590px !important;
            width: auto !important;
        }

        /* Add new outlook css end */
        /* Image width by default for 3 columns */
        img[class="rnb-col-3-img"] {
            max-width: 170px;
        }

        /* Image width by default for 2 columns */
        img[class="rnb-col-2-img"] {
            max-width: 264px;
        }

        /* Image width by default for 2 columns aside small size */
        img[class="rnb-col-2-img-side-xs"] {
            max-width: 180px;
        }

        /* Image width by default for 2 columns aside big size */
        img[class="rnb-col-2-img-side-xl"] {
            max-width: 350px;
        }

        /* Image width by default for 1 column */
        img[class="rnb-col-1-img"] {
            max-width: 550px;
        }

        /* Image width by default for header */
        img[class="rnb-header-img"] {
            max-width: 590px;
        }

        /* Ckeditor line-height spacing */
        .rnb-force-col p,
        ul,
        ol {
            margin: 0px !important;
        }

        .rnb-del-min-width p,
        ul,
        ol {
            margin: 0px !important;
        }

        /* tmpl-2 preview */
        .rnb-tmpl-width {
            width: 100% !important;
        }

        /* tmpl-11 preview */
        .rnb-social-width {
            padding-right: 15px !important;
        }

        /* tmpl-11 preview */
        .rnb-social-align {
            float: right !important;
        }

        /* Ul Li outlook extra spacing fix */
        li {
            mso-margin-top-alt: 0;
            mso-margin-bottom-alt: 0;
        }

        /* Outlook fix */
        table {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        /* Outlook fix */
        table,
        tr,
        td {
            border-collapse: collapse;
        }

        /* Outlook fix */
        p,
        a,
        li,
        blockquote {
            mso-line-height-rule: exactly;
        }

        /* Outlook fix */
        .msib-right-img {
            mso-padding-alt: 0 !important;
        }

        @media only screen and (min-width:590px) {

            /* mac fix width */
            .templateContainer {
                width: 590px !important;
            }
        }

        @media screen and (max-width: 360px) {

            /* yahoo app fix width "tmpl-2 tmpl-10 tmpl-13" in android devices */
            .rnb-yahoo-width {
                width: 360px !important;
            }
        }

        @media screen and (max-width: 380px) {

            /* fix width and font size "tmpl-4 tmpl-6" in mobile preview */
            .element-img-text {
                font-size: 24px !important;
            }

            .element-img-text2 {
                width: 230px !important;
            }

            .content-img-text-tmpl-6 {
                font-size: 24px !important;
            }

            .content-img-text2-tmpl-6 {
                width: 220px !important;
            }
        }

        @media screen and (max-width: 480px) {
            td[class="rnb-container-padding"] {
                padding-left: 10px !important;
                padding-right: 10px !important;
            }

            /* force container nav to (horizontal) blocks */
            td.rnb-force-nav {
                display: inherit;
            }

            /* fix text alignment "tmpl-11" in mobile preview */
            .rnb-social-text-left {
                width: 100%;
                text-align: center;
                margin-bottom: 15px;
            }

            .rnb-social-text-right {
                width: 100%;
                text-align: center;
            }
        }

        @media only screen and (max-width: 600px) {

            /* center the address &amp; social icons */
            .rnb-text-center {
                text-align: center !important;
            }

            /* force container columns to (horizontal) blocks */
            th.rnb-force-col {
                display: block;
                padding-right: 0 !important;
                padding-left: 0 !important;
                width: 100%;
            }

            table.rnb-container {
                width: 100% !important;
            }

            table.rnb-btn-col-content {
                width: 100% !important;
            }

            table.rnb-col-3 {
                /* unset table align="left/right" */
                float: none !important;
                width: 100% !important;
                /* change left/right padding and margins to top/bottom ones */
                margin-bottom: 10px;
                padding-bottom: 10px;
                /*border-bottom: 1px solid #eee;*/
            }

            table.rnb-last-col-3 {
                /* unset table align="left/right" */
                float: none !important;
                width: 100% !important;
            }

            table.rnb-col-2 {
                /* unset table align="left/right" */
                float: none !important;
                width: 100% !important;
                /* change left/right padding and margins to top/bottom ones */
                margin-bottom: 10px;
                padding-bottom: 10px;
                /*border-bottom: 1px solid #eee;*/
            }

            table.rnb-col-2-noborder-onright {
                /* unset table align="left/right" */
                float: none !important;
                width: 100% !important;
                /* change left/right padding and margins to top/bottom ones */
                margin-bottom: 10px;
                padding-bottom: 10px;
            }

            table.rnb-col-2-noborder-onleft {
                /* unset table align="left/right" */
                float: none !important;
                width: 100% !important;
                /* change left/right padding and margins to top/bottom ones */
                margin-top: 10px;
                padding-top: 10px;
            }

            table.rnb-last-col-2 {
                /* unset table align="left/right" */
                float: none !important;
                width: 100% !important;
            }

            table.rnb-col-1 {
                /* unset table align="left/right" */
                float: none !important;
                width: 100% !important;
            }

            img.rnb-col-3-img {
                /**max-width:none !important;**/
                width: 100% !important;
            }

            img.rnb-col-2-img {
                /**max-width:none !important;**/
                width: 100% !important;
            }

            img.rnb-col-2-img-side-xs {
                /**max-width:none !important;**/
                width: 100% !important;
            }

            img.rnb-col-2-img-side-xl {
                /**max-width:none !important;**/
                width: 100% !important;
            }

            img.rnb-col-1-img {
                /**max-width:none !important;**/
                width: 100% !important;
            }

            img.rnb-header-img {
                /**max-width:none !important;**/
                width: 100% !important;
                margin: 0 auto;
            }

            img.rnb-logo-img {
                /**max-width:none !important;**/
                width: 100% !important;
            }

            td.rnb-mbl-float-none {
                float: inherit !important;
            }

            .img-block-center {
                text-align: center !important;
            }

            .logo-img-center {
                float: inherit !important;
            }

            /* tmpl-11 preview */
            .rnb-social-align {
                margin: 0 auto !important;
                float: inherit !important;
            }

            /* tmpl-11 preview */
            .rnb-social-center {
                display: inline-block;
            }

            /* tmpl-11 preview */
            .social-text-spacing {
                margin-bottom: 0px !important;
                padding-bottom: 0px !important;
            }

            /* tmpl-11 preview */
            .social-text-spacing2 {
                padding-top: 15px !important;
            }

            /* UL bullet fixed in outlook */
            ul {
                mso-special-format: bullet;
            }
        }

        @media screen {
            body {
                font-family: 'Lato', 'Arial', Helvetica, sans-serif;
            }
        }
    </style>
    <!--[if gte mso 11]><style type="text/css">table{border-spacing: 0; }table td {border-collapse: separate;}</style><![endif]-->
    <!--[if !mso]><!-->
    <style type="text/css">
        table {
            border-spacing: 0;
        }

        table td {
            border-collapse: collapse;
        }
    </style>
    <!--<![endif]-->
    <!--[if gte mso 15]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
    <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
</head>

<body>

    <table border="0" align="center" width="100%" cellpadding="0" cellspacing="0" class="main-template"
        bgcolor="#f9fafc" style="background-color: rgb(249, 250, 252);">

        <tbody>
            <tr>
                <td align="center" valign="top">
                    <!--[if gte mso 9]>
                        <table align="center" border="0" cellspacing="0" cellpadding="0" width="590" style="width:590px;">
                        <tr>
                        <td align="center" valign="top" width="590" style="width:590px;">
                        <![endif]-->
                    <table border="0" cellpadding="0" cellspacing="0" width="590" class="templateContainer"
                        style="max-width:590px!important; width: 590px;">
                        <tbody>
                            <tr>

                                <td align="center" valign="top">

                                    <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0"
                                        cellspacing="0" style="min-width:590px;" name="Layout_0" id="Layout_0">
                                        <tbody>
                                            <tr>
                                                <td class="rnb-del-min-width" valign="top" align="center"
                                                    style="min-width:590px;">
                                                    <a href="#" name="Layout_0"></a>
                                                    <table width="100%" cellpadding="0" border="0" height="38"
                                                        cellspacing="0">
                                                        <tbody>
                                                            <tr>
                                                                <td valign="top" height="38">
                                                                    <img width="20" height="38"
                                                                        style="display:block; max-height:38px; max-width:20px;"
                                                                        alt=""
                                                                        src="https://img.mailinblue.com/new_images/rnb/rnb_space.gif">
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>

                                <td align="center" valign="top">

                                    <div style="background-color: rgb(255, 255, 255);">

                                        <!--[if mso]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->

                                        <!--[if mso]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->
                                        <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0"
                                            cellspacing="0"
                                            style="min-width:100%; -webkit-backface-visibility: hidden; line-height: 10px;"
                                            name="Layout_42" id="Layout_42">
                                            <tbody>
                                                <tr>
                                                    <td class="rnb-del-min-width" valign="top" align="center"
                                                        style="min-width: 590px;">
                                                        <a href="https://www.msuitecloud.com/gear/monitor/map"
                                                            target="_blank" name="Layout_42">
                                                            <table width="100%" class="rnb-container" cellpadding="0"
                                                                border="0" bgcolor="#ffffff" align="center"
                                                                cellspacing="0"
                                                                style="background-color: rgb(255, 255, 255);">
                                                                <tbody>
                                                                    <tr>
                                                                        <td valign="top" align="center">
                                                                            <table cellspacing="0" cellpadding="0"
                                                                                border="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                style="border-radius:5px; width:590;;max-width:590px !important;border-top:0px None #000;border-right:0px None #000;border-bottom:0px None #000;border-left:0px None #000;border-collapse: separate;border-radius: 5px;">
                                                                                                <div><img
                                                                                                        ng-if="col.img.source != 'url'"
                                                                                                        border="0"
                                                                                                        hspace="0"
                                                                                                        vspace="0"
                                                                                                        width="590"
                                                                                                        class="rnb-header-img"
                                                                                                        alt=""
                                                                                                        style="display:block; float:left; border-radius: 5px; "
                                                                                                        src="https://img.mailinblue.com/3103319/images/rnb/original/620ff6c701cea0233a014993.png">
                                                                                                </div>
                                                                                                <div
                                                                                                    style="clear:both;">
                                                                                                </div>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>

                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <!--[if mso]>
                </td>
                <![endif]-->

                                        <!--[if mso]>
                </tr>
                </table>
                <![endif]-->

                                    </div>
                                </td>
                            </tr>
                            <tr>

                                <td align="center" valign="top">

                                    <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0"
                                        cellspacing="0" style="min-width:590px;" name="Layout_3056" id="Layout_3056">
                                        <tbody>
                                            <tr>
                                                <td class="rnb-del-min-width" valign="top" align="center"
                                                    style="min-width:590px;">
                                                    <a href="#" name="Layout_3056"></a>
                                                    <table width="100%" cellpadding="0" border="0" height="12"
                                                        cellspacing="0">
                                                        <tbody>
                                                            <tr>
                                                                <td valign="top" height="12">
                                                                    <img width="20" height="12"
                                                                        style="display:block; max-height:12px; max-width:20px;"
                                                                        alt=""
                                                                        src="https://img.mailinblue.com/new_images/rnb/rnb_space.gif">
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>

                                <td align="center" valign="top">

                                    <div style="background-color: rgb(255, 255, 255);">

                                        <!--[if mso]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->

                                        <!--[if mso]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->
                                        <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0"
                                            cellspacing="0"
                                            style="min-width:100%; -webkit-backface-visibility: hidden; line-height: 10px;"
                                            name="Layout_57" id="Layout_57">
                                            <tbody>
                                                <tr>
                                                    <td class="rnb-del-min-width" valign="top" align="center"
                                                        style="min-width: 590px;">
                                                        <a href="#" name="Layout_57"></a>
                                                        <table width="100%" class="rnb-container" cellpadding="0"
                                                            border="0" bgcolor="#ffffff" align="center" cellspacing="0"
                                                            style="background-color: rgb(255, 255, 255);">
                                                            <tbody>
                                                                <tr>
                                                                    <td valign="top" align="center">
                                                                        <table cellspacing="0" cellpadding="0"
                                                                            border="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>
                                                                                        <div
                                                                                            style="border-radius:5px; width:590;;max-width:590px !important;border-top:0px None #000;border-right:0px None #000;border-bottom:0px None #000;border-left:0px None #000;border-collapse: separate;border-radius: 0px;margin-bottom: 5%; ">
                                                                                            <div><img
                                                                                                    ng-if="col.img.source != 'url'"
                                                                                                    border="0"
                                                                                                    hspace="0"
                                                                                                    vspace="0"
                                                                                                    width="590"
                                                                                                    class="rnb-header-img"
                                                                                                    alt=""
                                                                                                    style="display:block; float:left; border-radius: 5px; "
                                                                                                    src="https://www.msuitecloud.com/filedata/notificationtemplates/assets/images/{{IMAGE_PNG}}">
                                                                                            </div>
                                                                                            <div style="clear:both;">
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>

                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <!--[if mso]>
                </td>
                <![endif]-->

                                        <!--[if mso]>
                </tr>
                </table>
                <![endif]-->

                                    </div>
                                </td>
                            </tr>
                            <tr>

                                <td align="center" valign="top">

                                    <div style="background-color: rgb(255, 255, 255); border-radius: 0px;">

                                        <!--[if mso]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->

                                        <!--[if mso]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->

                                        <table width="100%" cellpadding="0" border="0" cellspacing="0" name="Layout_61"
                                            id="Layout_61">
                                            <tbody>
                                                <tr>
                                                    <td align="center" valign="top"><a href="#" name="Layout_61"></a>
                                                        <table border="0" width="100%" cellpadding="0" cellspacing="0"
                                                            class="rnb-container" bgcolor="#ffffff"
                                                            style="height: 0px; background-color: rgb(255, 255, 255); border-radius: 0px; border-collapse: separate; padding-left: 20px; padding-right: 20px;">
                                                            <tbody>
                                                                <tr>
                                                                    <td class="rnb-container-padding"
                                                                        style="font-size: px;font-family: ; color: ;">

                                                                        <table border="0" cellpadding="0"
                                                                            cellspacing="0"
                                                                            class="rnb-columns-container" align="center"
                                                                            style="margin:auto;">
                                                                            <tbody>
                                                                                <tr>

                                                                                    <th class="rnb-force-col"
                                                                                        align="center"
                                                                                        style="text-align: center; font-weight: normal">

                                                                                        <table border="0"
                                                                                            cellspacing="0"
                                                                                            cellpadding="0"
                                                                                            align="center"
                                                                                            class="rnb-col-1">

                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td height="10">
                                                                                                    </td>
                                                                                                </tr>

                                                                                                <tr>
                                                                                                    <td
                                                                                                        style="font-family:Arial,Helvetica,sans-serif; color:#3c4858; text-align:center;">

                                                                                                        <span
                                                                                                            style="color:#3c4858;"><span
                                                                                                                style="color:#47525E;"><strong><span
                                                                                                                        style="font-size:24px;">{{NUEVA_ALERTA}}</span></strong></span></span>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td height="10">
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </th>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>

                                                            </tbody>
                                                        </table>

                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                        <!--[if mso]>
                </td>
                <![endif]-->

                                        <!--[if mso]>
                </tr>
                </table>
                <![endif]-->

                                    </div>
                                </td>
                            </tr>
                            <tr>

                                <td align="center" valign="top">

                                    <div style="background-color: rgb(255, 255, 255); border-radius: 0px;">

                                        <!--[if mso]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->

                                        <!--[if mso]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->
                                        <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0"
                                            cellspacing="0" style="min-width:100%;" name="Layout_54">
                                            <tbody>
                                                <tr>
                                                    <td class="rnb-del-min-width" align="center" valign="top">
                                                        <a href="#" name="Layout_54"></a>
                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                                            class="rnb-container" bgcolor="#ffffff"
                                                            style="background-color: rgb(255, 255, 255); padding-left: 20px; padding-right: 20px; border-collapse: separate; border-radius: 0px; border-bottom: 0px none rgb(200, 200, 200);">

                                                            <tbody>
                                                                <tr>
                                                                    <td height="20"
                                                                        style="font-size:1px; line-height:20px; mso-hide: all;">
                                                                        &nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td valign="top" class="rnb-container-padding"
                                                                        align="left">

                                                                        <table width="100%" border="0" cellpadding="0"
                                                                            cellspacing="0"
                                                                            class="rnb-columns-container">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <th class="rnb-force-col"
                                                                                        style="text-align: left; font-weight: normal; padding-right: 0px;"
                                                                                        valign="top">

                                                                                        <table border="0" valign="top"
                                                                                            cellspacing="0"
                                                                                            cellpadding="0" width="100%"
                                                                                            align="left"
                                                                                            class="rnb-col-1">

                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td
                                                                                                        style="font-size:14px; font-family:Arial,Helvetica,sans-serif, sans-serif; color:#3c4858;">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                style="text-align: center;">
                                                                                                                <span
                                                                                                                    style="color:#47525E;"><span
                                                                                                                        style="font-size:16px;"><span
                                                                                                                            style="background-color: transparent;">{{TEXT_ABOUT}} {DEVICE_NAME}</span></span></span>
                                                                                                            </div>

                                                                                                            <div>&nbsp;
                                                                                                            </div>
                                                                                                        </div>

                                                                                                        <div>
                                                                                                            <div
                                                                                                                style="text-align: center;">
                                                                                                                <span
                                                                                                                    style="color:#47525E;"><span
                                                                                                                        style="font-size:16px;"><span
                                                                                                                            style="background-color: transparent;">Parámetro
                                                                                                                            afectado:
                                                                                                                            {ENDPOINT_NAME}</span></span></span>
                                                                                                            </div>

                                                                                                            <div>&nbsp;
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>

                                                                                    </th>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="20"
                                                                        style="font-size:1px; line-height:20px; mso-hide: all;">
                                                                        &nbsp;</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <!--[if mso]>
                </td>
                <![endif]-->

                                        <!--[if mso]>
                </tr>
                </table>
                <![endif]-->

                                    </div>
                                </td>
                            </tr>
                            <tr>

                                <td align="center" valign="top">

                                    <div style="background-color: rgb(255, 255, 255); border-radius: 0px;">

                                        <!--[if mso]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->

                                        <!--[if mso]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->
                                        <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0"
                                            cellspacing="0" style="min-width:100%;" name="Layout_60">
                                            <tbody>
                                                <tr>
                                                    <td class="rnb-del-min-width" align="center" valign="top">
                                                        <a href="#" name="Layout_60"></a>
                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                                            class="rnb-container" bgcolor="#ffffff"
                                                            style="background-color: rgb(255, 255, 255); padding-left: 20px; padding-right: 20px; border-collapse: separate; border-radius: 0px; border-bottom: 0px none rgb(200, 200, 200);">

                                                            <tbody>
                                                                <tr>
                                                                    <td height="20"
                                                                        style="font-size:1px; line-height:20px; mso-hide: all;">
                                                                        &nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td valign="top" class="rnb-container-padding"
                                                                        align="left">

                                                                        <table width="100%" border="0" cellpadding="0"
                                                                            cellspacing="0"
                                                                            class="rnb-columns-container">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <th class="rnb-force-col"
                                                                                        style="text-align: left; font-weight: normal; padding-right: 0px;"
                                                                                        valign="top">

                                                                                        <table border="0" valign="top"
                                                                                            cellspacing="0"
                                                                                            cellpadding="0" width="100%"
                                                                                            align="left"
                                                                                            class="rnb-col-1">

                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td
                                                                                                        style="font-size:14px; font-family:Arial,Helvetica,sans-serif, sans-serif; color:#3c4858;">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                style="text-align: center;">
                                                                                                                <span
                                                                                                                    style="color:#47525E;"><span
                                                                                                                        style="font-size:16px;"><strong><span
                                                                                                                                style="background-color: transparent;">“{ALARM_DETAILS}”</span></strong></span></span>
                                                                                                            </div>

                                                                                                            <div>&nbsp;
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>

                                                                                    </th>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="20"
                                                                        style="font-size:1px; line-height:20px; mso-hide: all;">
                                                                        &nbsp;</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <!--[if mso]>
                </td>
                <![endif]-->

                                        <!--[if mso]>
                </tr>
                </table>
                <![endif]-->

                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" valign="top">

                                    <div style="background-color: rgb(255, 255, 255); border-radius: 0px;">

                                        <!--[if mso]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->

                                        <!--[if mso]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->
                                        <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0"
                                            cellspacing="0" style="min-width:100%;" name="Layout_50">
                                            <tbody>
                                                <tr>
                                                    <td class="rnb-del-min-width" align="center" valign="top">
                                                        <a href="#" name="Layout_50"></a>
                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                                            class="rnb-container" bgcolor="#ffffff"
                                                            style="background-color: rgb(255, 255, 255); padding-left: 20px; padding-right: 20px; border-collapse: separate; border-radius: 0px; border-bottom: 0px none rgb(200, 200, 200);">

                                                            <tbody>
                                                                <tr>
                                                                    <td height="20"
                                                                        style="font-size:1px; line-height:20px; mso-hide: all;">
                                                                        &nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td valign="top" class="rnb-container-padding"
                                                                        align="left">

                                                                        <table width="100%" border="0" cellpadding="0"
                                                                            cellspacing="0"
                                                                            class="rnb-columns-container">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <th class="rnb-force-col"
                                                                                        style="text-align: left; font-weight: normal; padding-right: 0px;"
                                                                                        valign="top">

                                                                                        <table border="0" valign="top"
                                                                                            cellspacing="0"
                                                                                            cellpadding="0" width="100%"
                                                                                            align="left"
                                                                                            class="rnb-col-1">

                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td
                                                                                                        style="font-size:16px; font-family:Arial,Helvetica,sans-serif, sans-serif; color:#47525E;">
                                                                                                        <div
                                                                                                            style="line-height: 20px; text-align: center;">
                                                                                                            <span
                                                                                                                style="background-color: transparent;">{{BE_NOTIFIED}}</span>
                                                                                                        </div>

                                                                                                        <div
                                                                                                            style="line-height: 20px; text-align: center;">
                                                                                                            <span
                                                                                                                style="background-color: transparent;"><br><br>Saludos
                                                                                                                cordiales,<br>
                                                                                                                Equipo
                                                                                                                mSuite.</span>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>

                                                                                    </th>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="20"
                                                                        style="font-size:1px; line-height:20px; mso-hide: all;">
                                                                        &nbsp;</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <!--[if mso]>
                </td>
                <![endif]-->

                                        <!--[if mso]>
                </tr>
                </table>
                <![endif]-->

                                    </div>
                                </td>
                            </tr>
                            <tr>

                                <td align="center" valign="top">

                                    <div style="background-color: rgb(30, 135, 250); border-radius: 5px;">

                                        <!--[if mso]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->

                                        <!--[if mso]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->
                                        <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0"
                                            cellspacing="0" style="min-width:100%;" name="Layout_49">
                                            <tbody>
                                                <tr>
                                                    <td class="rnb-del-min-width" align="center" valign="top">
                                                        <a href="#" name="Layout_49"></a>
                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                                            class="rnb-container" bgcolor="#1E87FA"
                                                            style="background-color: rgba(36,50,76); padding-left: 20px; padding-right: 20px; border-collapse: separate; border-radius: 5px; border-bottom: 0px none rgb(200, 200, 200);">

                                                            <tbody>
                                                                <tr>
                                                                    <td height="20"
                                                                        style="font-size:1px; line-height:20px; mso-hide: all;">
                                                                        &nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td valign="top" class="rnb-container-padding"
                                                                        align="left">

                                                                        <table width="100%" border="0" cellpadding="0"
                                                                            cellspacing="0"
                                                                            class="rnb-columns-container">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <th class="rnb-force-col"
                                                                                        style="text-align: left; font-weight: normal; padding-right: 0px;"
                                                                                        valign="top">

                                                                                        <table border="0" valign="top"
                                                                                            cellspacing="0"
                                                                                            cellpadding="0" width="100%"
                                                                                            align="left"
                                                                                            class="rnb-col-1">

                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td
                                                                                                        style="font-size:14px; font-family:'Lato','Arial',Helvetica,sans-serif, sans-serif; color:#3c4858;">
                                                                                                        <div
                                                                                                            style="text-align: center;">
                                                                                                            <span
                                                                                                                style="color:#FFFFFF;">¿Necesitas
                                                                                                                ayuda?
                                                                                                                Envia
                                                                                                                todas
                                                                                                                tus
                                                                                                                preguntas
                                                                                                                a
                                                                                                                support@msuitecloud.com
                                                                                                                o <a href="https://www.msuitecloud.com/gear/monitor/map"
                                                                                                                    target="_blank"
                                                                                                                    style="text-decoration: underline; color: #FFFFFF;">en
                                                                                                                    nuestra
                                                                                                                    App</a>.</span>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>

                                                                                    </th>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="20"
                                                                        style="font-size:1px; line-height:20px; mso-hide: all;">
                                                                        &nbsp;</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <!--[if mso]>
                </td>
                <![endif]-->

                                        <!--[if mso]>
                </tr>
                </table>
                <![endif]-->

                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!--[if gte mso 9]>
                        </td>
                        </tr>
                        </table>
                        <![endif]-->
                </td>
            </tr>
        </tbody>
    </table>

</body>

</html>`;

    //-------------------------------------------------------------------------------------------------------
    // Creacion de endpoints
    var choke_orif_diameter = endpoints.addEndpoint("CHOKE_ORIF_DIAMETER", { en: "Choke Orificie Diameter", es: "Diámetro del orificio del Choke" }, endpointType.genericSensor);
    choke_orif_diameter.variableTypeId = 1278;
    choke_orif_diameter.operationSecurityLevel = endpointOperationSecurityLevel.high;
    choke_orif_diameter.operationWarningMessage = { "en": "You are about to change the value of Choke Orificie Diameter, this variable accepts values between 1 and 96. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Diámetro del orificio del Choke, esta variable acepta valores entre 1 y 96. Este cambio puede tardar un minuto en surtir efecto." };
    choke_orif_diameter.accessType = endpointAccessType.readWriteCommand;
    var liquid_flow_rate = endpoints.addEndpoint("LIQUID_FLOW_RATE", { en: "Liquid flow rate", es: "Caudal de liquido" }, endpointType.genericSensor);
    liquid_flow_rate.variableTypeId = 1342;
    var ai1_connected = endpoints.addEndpoint("AI1_CONNECTED", { en: "Analog input #1", es: "Entrada analógica #1" }, endpointType.genericSensor);
    ai1_connected.variableTypeId = 1280;
    var ai2_connected = endpoints.addEndpoint("AI2_CONNECTED", { en: "Analog input #2", es: "Entrada analógica #2" }, endpointType.genericSensor);
    ai2_connected.variableTypeId = 1280;
    var shut_in_opening_pre = endpoints.addEndpoint("SHUT_IN_OPENING_PRE", { en: "Shut-in Cycle - Opening Pressure", es: "Ciclo de cierre - Presión de apertura" }, endpointType.pressureSensor);
    shut_in_opening_pre.operationSecurityLevel = endpointOperationSecurityLevel.high;
    shut_in_opening_pre.operationWarningMessage = { "en": "You are about to change the value of Shut-in Cycle - Opening Pressure, this variable accepts values between 50 and 6000. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Ciclo de cierre - Presión de apertura, esta variable acepta valores entre 50 y 6000. Este cambio puede tardar un minuto en surtir efecto." };
    shut_in_opening_pre.accessType = endpointAccessType.readWriteCommand;
    var ai3_connected = endpoints.addEndpoint("AI3_CONNECTED", { en: "Analog input #3", es: "Entrada analógica #3" }, endpointType.genericSensor);
    ai3_connected.variableTypeId = 1280;
    var ai4_connected = endpoints.addEndpoint("AI4_CONNECTED", { en: "Analog input #4", es: "Entrada analógica #4" }, endpointType.genericSensor);
    ai4_connected.variableTypeId = 1280;
    var flow_regime = endpoints.addEndpoint("FLOW_REGIME", { en: "Flow regime", es: "Regimen de flujo" }, endpointType.genericSensor);
    flow_regime.variableTypeId = 1281;
    var flow_type = endpoints.addEndpoint("FLOW_TYPE", { en: "Flow type", es: "Tipo de flujo" }, endpointType.genericSensor);
    flow_type.variableTypeId = 1282;
    var fluid_model = endpoints.addEndpoint("FLUID_MODEL", { en: "Fluid Model", es: "Modelo de fluido" }, endpointType.genericSensor);
    fluid_model.variableTypeId = 1283;
    fluid_model.operationSecurityLevel = endpointOperationSecurityLevel.high;
    fluid_model.operationWarningMessage = { "en": "You are about to change the value of Fluid Model. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de Modelo de fluido. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    fluid_model.accessType = endpointAccessType.readWriteCommand;
    var upstream_tubing_diameter = endpoints.addEndpoint("UPSTREAM_TUBING_DIAMETER", { en: "Upstream Tubing Diameter", es: "Diámetro de la cañería aguas arriba" }, endpointType.genericSensor);
    upstream_tubing_diameter.variableTypeId = 1284;
    upstream_tubing_diameter.operationSecurityLevel = endpointOperationSecurityLevel.high;
    upstream_tubing_diameter.operationWarningMessage = { "en": "You are about to change the value of Upstream Tubing Diameter, this variable accepts values between 0.5 and 10. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Diámetro de la cañería aguas arriba, esta variable acepta valores entre 0.5 y 10. Este cambio puede tardar un minuto en surtir efecto." };
    upstream_tubing_diameter.accessType = endpointAccessType.readWriteCommand;
    var maint_cycles_closing_mode = endpoints.addEndpoint("MAINT_CYCLES_CLOSING_MODE", { en: "Maintenance Cycles - Closing Mode", es: "Ciclos de mantenimiento - Modo de cierre" }, endpointType.genericSensor);
    maint_cycles_closing_mode.variableTypeId = 1286;
    maint_cycles_closing_mode.operationSecurityLevel = endpointOperationSecurityLevel.high;
    maint_cycles_closing_mode.operationWarningMessage = { "en": "You are about to change the value of Maintenance Cycles - Closing Mode. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de Ciclos de mantenimiento - Modo de cierre. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    maint_cycles_closing_mode.accessType = endpointAccessType.readWriteCommand;
    var maint_cycles_opening_mode = endpoints.addEndpoint("MAINT_CYCLES_OPENING_MODE", { en: "Maintenance Cycles - Opening Mode", es: "Ciclos de mantenimiento - Modo de apertura" }, endpointType.genericSensor);
    maint_cycles_opening_mode.variableTypeId = 1287;
    maint_cycles_opening_mode.operationSecurityLevel = endpointOperationSecurityLevel.high;
    maint_cycles_opening_mode.operationWarningMessage = { "en": "You are about to change the value of Maintenance Cycles - Opening Mode. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de Ciclos de mantenimiento - Modo de apertura. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    maint_cycles_opening_mode.accessType = endpointAccessType.readWriteCommand;
    var gas_flow_rate = endpoints.addEndpoint("GAS_FLOW_RATE", { en: "Gas flow rate", es: "Caudal de gas" }, endpointType.genericSensor);
    gas_flow_rate.variableTypeId = 1285;
    var maint_cycles_opening_pre = endpoints.addEndpoint("MAINT_CYCLES_OPENING_PRE", { en: "Maintenance Cycles - Opening Pressure", es: "Ciclos de mantenimiento - Presión de apertura" }, endpointType.pressureSensor);
    maint_cycles_opening_pre.operationSecurityLevel = endpointOperationSecurityLevel.high;
    maint_cycles_opening_pre.operationWarningMessage = { "en": "You are about to change the value of Maintenance Cycles - Opening Pressure, this variable accepts values between 50 and 6000. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Ciclos de mantenimiento - Presión de apertura, esta variable acepta valores entre 50 y 6000. Este cambio puede tardar un minuto en surtir efecto." };
    maint_cycles_opening_pre.accessType = endpointAccessType.readWriteCommand;
    var max_pre_to_open = endpoints.addEndpoint("MAX_PRE_TO_OPEN", { en: "Max. Line Pressure To Open", es: "Presión máxima de la línea para abrir" }, endpointType.pressureSensor);
    max_pre_to_open.operationSecurityLevel = endpointOperationSecurityLevel.high;
    max_pre_to_open.operationWarningMessage = { "en": "You are about to change the value of Max. Line Pressure To Open, this variable accepts values between 0 and 3000. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Presión máxima de la línea para abrir, esta variable acepta valores entre 0 y 3000. Este cambio puede tardar un minuto en surtir efecto." };
    max_pre_to_open.accessType = endpointAccessType.readWriteCommand;
    var opmode = endpoints.addEndpoint("OPMODE", { en: "Operational Mode", es: "Modo de operación" }, endpointType.genericSensor);
    opmode.variableTypeId = 1288;
    opmode.operationSecurityLevel = endpointOperationSecurityLevel.high;
    opmode.operationWarningMessage = { "en": "You are about to change the value of Operational Mode. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de Modo de operación. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    opmode.accessType = endpointAccessType.readWriteCommand;
    var shut_in_closing_mode = endpoints.addEndpoint("SHUT_IN_CLOSING_MODE", { en: "Shut-in Cycle - Closing Mode", es: "Ciclo de cierre - Modo de cierre" }, endpointType.genericSensor);
    shut_in_closing_mode.variableTypeId = 1290;
    shut_in_closing_mode.operationSecurityLevel = endpointOperationSecurityLevel.high;
    shut_in_closing_mode.operationWarningMessage = { "en": "You are about to change the value of Shut-in Cycle - Closing Mode. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de Ciclo de cierre - Modo de cierre. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    shut_in_closing_mode.accessType = endpointAccessType.readWriteCommand;
    var shut_in_opening_mode = endpoints.addEndpoint("SHUT_IN_OPENING_MODE", { en: "Shut-in Cycle - Opening Mode", es: "Ciclo de cierre - Modo de apertura" }, endpointType.genericSensor);
    shut_in_opening_mode.variableTypeId = 1291;
    shut_in_opening_mode.operationSecurityLevel = endpointOperationSecurityLevel.high;
    shut_in_opening_mode.operationWarningMessage = { "en": "You are about to change the value of Shut-in Cycle - Opening Mode. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de Ciclo de cierre - Modo de apertura. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    shut_in_opening_mode.accessType = endpointAccessType.readWriteCommand;
    var ogr = endpoints.addEndpoint("OGR", { en: "OGR", es: "OGR" }, endpointType.genericSensor);
    ogr.variableTypeId = 1289;
    ogr.operationSecurityLevel = endpointOperationSecurityLevel.high;
    ogr.operationWarningMessage = { "en": "You are about to change the value of OGR, this variable accepts values between 0 and 65.5. This change may take a minute to take effect.", "es": "Está por cambiar el valor de OGR, esta variable acepta valores entre 0 y 65.5. Este cambio puede tardar un minuto en surtir efecto." };
    ogr.accessType = endpointAccessType.readWriteCommand;
    var whp = endpoints.addEndpoint("WHP", { en: "Wellhead pressure", es: "Presión de cabeza de pozo" }, endpointType.pressureSensor);
    var lp = endpoints.addEndpoint("LP", { en: "Line pressure", es: "Presión de linea" }, endpointType.pressureSensor);
    var wgr = endpoints.addEndpoint("WGR", { en: "WGR", es: "WGR" }, endpointType.genericSensor);
    wgr.variableTypeId = 1289;
    wgr.operationSecurityLevel = endpointOperationSecurityLevel.high;
    wgr.operationWarningMessage = { "en": "You are about to change the value of WGR, this variable accepts values between 0 and 65.5. This change may take a minute to take effect.", "es": "Está por cambiar el valor de WGR, esta variable acepta valores entre 0 y 65.5. Este cambio puede tardar un minuto en surtir efecto." };
    wgr.accessType = endpointAccessType.readWriteCommand;
    var wht = endpoints.addEndpoint("WHT", { en: "Wellhead temperature", es: "Temperatura de cabeza de pozo" }, endpointType.temperatureSensor);
    var upstream_pre = endpoints.addEndpoint("UPSTREAM_PRE", { en: "Pressure upstream of choke", es: "Presion aguas arriba del choke" }, endpointType.pressureSensor);
    var shut_in_min_turner = endpoints.addEndpoint("SHUT_IN_MIN_TURNER", { en: "Shut-in Cycle - Min. Turner Coefficient", es: "Ciclo de cierre - Coeficiente de inversión mínimo" }, endpointType.genericSensor);
    shut_in_min_turner.variableTypeId = 1292;
    shut_in_min_turner.operationSecurityLevel = endpointOperationSecurityLevel.high;
    shut_in_min_turner.operationWarningMessage = { "en": "You are about to change the value of Shut-in Cycle - Min. Turner Coefficient, this variable accepts values between 0.1 and 2. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Ciclo de cierre - Coeficiente de inversión mínimo, esta variable acepta valores entre 0.1 y 2. Este cambio puede tardar un minuto en surtir efecto." };
    shut_in_min_turner.accessType = endpointAccessType.readWriteCommand;
    var maint_cycles_min_turner = endpoints.addEndpoint("MAINT_CYCLES_MIN_TURNER", { en: "Maintenance Cycles - Min. Turner Coefficient", es: "Ciclos de mantenimiento - Coeficiente de inversión mínimo" }, endpointType.genericSensor);
    maint_cycles_min_turner.variableTypeId = 1292;
    maint_cycles_min_turner.operationSecurityLevel = endpointOperationSecurityLevel.high;
    maint_cycles_min_turner.operationWarningMessage = { "en": "You are about to change the value of Maintenance Cycles - Min. Turner Coefficient, this variable accepts values between 0.2 and 1.8. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Ciclos de mantenimiento - Coeficiente de inversión mínimo, esta variable acepta valores entre 0.2 y 1.8. Este cambio puede tardar un minuto en surtir efecto." };
    maint_cycles_min_turner.accessType = endpointAccessType.readWriteCommand;
    var gas_specific_grav = endpoints.addEndpoint("GAS_SPECIFIC_GRAV", { en: "Gas Specific Gravity", es: "Gravedad específica del gas" }, endpointType.genericSensor);
    gas_specific_grav.variableTypeId = 1292;
    gas_specific_grav.operationSecurityLevel = endpointOperationSecurityLevel.high;
    gas_specific_grav.operationWarningMessage = { "en": "You are about to change the value of Gas Specific Gravity, this variable accepts values between 0.1 and 1. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Gravedad específica del gas, esta variable acepta valores entre 0.1 y 1. Este cambio puede tardar un minuto en surtir efecto." };
    gas_specific_grav.accessType = endpointAccessType.readWriteCommand;
    var oil_specific_grav = endpoints.addEndpoint("OIL_SPECIFIC_GRAV", { en: "Oil Specific Gravity", es: "Gravedad específica del petróleo" }, endpointType.genericSensor);
    oil_specific_grav.variableTypeId = 1292;
    oil_specific_grav.operationSecurityLevel = endpointOperationSecurityLevel.high;
    oil_specific_grav.operationWarningMessage = { "en": "You are about to change the value of Oil Specific Gravity, this variable accepts values between 0.001 and 1. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Gravedad específica del petróleo, esta variable acepta valores entre 0.001 y 1. Este cambio puede tardar un minuto en surtir efecto." };
    oil_specific_grav.accessType = endpointAccessType.readWriteCommand;
    var water_specific_grav = endpoints.addEndpoint("WATER_SPECIFIC_GRAV", { en: "Water Specific Gravity", es: "Gravedad específica del agua" }, endpointType.genericSensor);
    water_specific_grav.variableTypeId = 1292;
    water_specific_grav.operationSecurityLevel = endpointOperationSecurityLevel.high;
    water_specific_grav.operationWarningMessage = { "en": "You are about to change the value of Water Specific Gravity, this variable accepts values between 0.001 and 1.5. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Gravedad específica del agua, esta variable acepta valores entre 0.001 y 1.5. Este cambio puede tardar un minuto en surtir efecto." };
    water_specific_grav.accessType = endpointAccessType.readWriteCommand;
    var sing_phase_gas_flow_eq_corr = endpoints.addEndpoint("SING_PHASE_GAS_FLOW_EQ_CORR", { en: "Single Phase Gas Flow Eq. Correction Factor", es: "Factor de la corrección de la ecuación de flujo de gas monofásico" }, endpointType.genericSensor);
    sing_phase_gas_flow_eq_corr.variableTypeId = 1292;
    sing_phase_gas_flow_eq_corr.operationSecurityLevel = endpointOperationSecurityLevel.high;
    sing_phase_gas_flow_eq_corr.operationWarningMessage = { "en": "You are about to change the value of Single Phase Gas Flow Eq. Correction Factor, this variable accepts values between 0.1 and 2. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Factor de la corrección de la ecuación de flujo de gas monofásico, esta variable acepta valores entre 0.1 y 2. Este cambio puede tardar un minuto en surtir efecto." };
    sing_phase_gas_flow_eq_corr.accessType = endpointAccessType.readWriteCommand;
    var two_phase_gas_flow_eq_corr = endpoints.addEndpoint("TWO_PHASE_GAS_FLOW_EQ_CORR", { en: "Two Phases Mixture Flow Eq. Correction Factor", es: "Factor de la corrección de la ecuación de flujo de gas de dos fases" }, endpointType.genericSensor);
    two_phase_gas_flow_eq_corr.variableTypeId = 1292;
    two_phase_gas_flow_eq_corr.operationSecurityLevel = endpointOperationSecurityLevel.high;
    two_phase_gas_flow_eq_corr.operationWarningMessage = { "en": "You are about to change the value of Two Phases Mixture Flow Eq. Correction Factor, this variable accepts values between 0.1 and 10. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Factor de la corrección de la ecuación de flujo de gas de dos fases, esta variable acepta valores entre 0.1 y 10. Este cambio puede tardar un minuto en surtir efecto." };
    two_phase_gas_flow_eq_corr.accessType = endpointAccessType.readWriteCommand;
    var turner_critical_vel_eq_corr = endpoints.addEndpoint("TURNER_CRITICAL_VEL_EQ_CORR", { en: "Turner Critical Velocity Eq. Correction Factor", es: "Factor de corrección de velocidad crítica de turner" }, endpointType.genericSensor);
    turner_critical_vel_eq_corr.variableTypeId = 1292;
    turner_critical_vel_eq_corr.operationSecurityLevel = endpointOperationSecurityLevel.high;
    turner_critical_vel_eq_corr.operationWarningMessage = { "en": "You are about to change the value of Turner Critical Velocity Eq. Correction Factor, this variable accepts values between 0.1 and 2. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Factor de corrección de velocidad crítica de turner, esta variable acepta valores entre 0.1 y 2. Este cambio puede tardar un minuto en surtir efecto." };
    turner_critical_vel_eq_corr.accessType = endpointAccessType.readWriteCommand;
    var gas_espc_heat_const_vol = endpoints.addEndpoint("GAS_ESPC_HEAT_CONST_VOL", { en: "Gas Specific Heat At Constant Volume", es: "Calor específico del gas a vol. const." }, endpointType.genericSensor);
    gas_espc_heat_const_vol.variableTypeId = 1293;
    gas_espc_heat_const_vol.operationSecurityLevel = endpointOperationSecurityLevel.high;
    gas_espc_heat_const_vol.operationWarningMessage = { "en": "You are about to change the value of Gas Specific Heat At Constant Volume, this variable accepts values between 0.1 and 1. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Calor específico del gas a vol. const., esta variable acepta valores entre 0.1 y 1. Este cambio puede tardar un minuto en surtir efecto." };
    gas_espc_heat_const_vol.accessType = endpointAccessType.readWriteCommand;
    var gas_espc_heat_const_pre = endpoints.addEndpoint("GAS_ESPC_HEAT_CONST_PRE", { en: "Gas Specific Heat At Constant Pressure", es: "Calor específico del gas a pres. const." }, endpointType.genericSensor);
    gas_espc_heat_const_pre.variableTypeId = 1293;
    gas_espc_heat_const_pre.operationSecurityLevel = endpointOperationSecurityLevel.high;
    gas_espc_heat_const_pre.operationWarningMessage = { "en": "You are about to change the value of Gas Specific Heat At Constant Pressure, this variable accepts values between 0.1 and 1. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Calor específico del gas a pres. const., esta variable acepta valores entre 0.1 y 1. Este cambio puede tardar un minuto en surtir efecto." };
    gas_espc_heat_const_pre.accessType = endpointAccessType.readWriteCommand;
    var liquid_espc_heat = endpoints.addEndpoint("LIQUID_ESPC_HEAT", { en: "Liquid Specific Heat", es: "Calor específico del líquido" }, endpointType.genericSensor);
    liquid_espc_heat.variableTypeId = 1293;
    liquid_espc_heat.operationSecurityLevel = endpointOperationSecurityLevel.high;
    liquid_espc_heat.operationWarningMessage = { "en": "You are about to change the value of Liquid Specific Heat, this variable accepts values between 0.1 and 1.5. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Calor específico del líquido, esta variable acepta valores entre 0.1 y 1.5. Este cambio puede tardar un minuto en surtir efecto." };
    liquid_espc_heat.accessType = endpointAccessType.readWriteCommand;
    var shut_in_rep_interval = endpoints.addEndpoint("SHUT_IN_REP_INTERVAL", { en: "Shut-in Cycle - Repetition Interval", es: "Ciclo de cierre - Intervalo de repetición" }, endpointType.genericSensor);
    shut_in_rep_interval.variableTypeId = 1294;
    shut_in_rep_interval.operationSecurityLevel = endpointOperationSecurityLevel.high;
    shut_in_rep_interval.operationWarningMessage = { "en": "You are about to change the value of Shut-in Cycle - Repetition Interval, this variable accepts values between 0 and 65535. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Ciclo de cierre - Intervalo de repetición, esta variable acepta valores entre 0 y 65535. Este cambio puede tardar un minuto en surtir efecto." };
    shut_in_rep_interval.accessType = endpointAccessType.readWriteCommand;
    var shut_in_closing_time = endpoints.addEndpoint("SHUT_IN_CLOSING_TIME", { en: "Shut-in Cycle - Closing Time", es: "Ciclo de cierre - Tiempo de cierre" }, endpointType.genericSensor);
    shut_in_closing_time.variableTypeId = 1295;
    shut_in_closing_time.operationSecurityLevel = endpointOperationSecurityLevel.high;
    shut_in_closing_time.operationWarningMessage = { "en": "You are about to change the value of Shut-in Cycle - Closing Time, this variable accepts values between 0 and 1080. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Ciclo de cierre - Tiempo de cierre, esta variable acepta valores entre 0 y 1080. Este cambio puede tardar un minuto en surtir efecto." };
    shut_in_closing_time.accessType = endpointAccessType.readWriteCommand;
    var shut_in_opening_time = endpoints.addEndpoint("SHUT_IN_OPENING_TIME", { en: "Shut-in Cycle - Opening Time", es: "Ciclo de cierre - Tiempo de apertura" }, endpointType.genericSensor);
    shut_in_opening_time.variableTypeId = 1295;
    shut_in_opening_time.operationSecurityLevel = endpointOperationSecurityLevel.high;
    shut_in_opening_time.operationWarningMessage = { "en": "You are about to change the value of Shut-in Cycle - Opening Time, this variable accepts values between 0 and 1080. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Ciclo de cierre - Tiempo de apertura, esta variable acepta valores entre 0 y 1080. Este cambio puede tardar un minuto en surtir efecto." };
    shut_in_opening_time.accessType = endpointAccessType.readWriteCommand;
    var shut_in_min_closed_valve_time = endpoints.addEndpoint("SHUT_IN_MIN_CLOSED_VALVE_TIME", { en: "Shut-in Cycle - Min. Closed Valve Time", es: "Ciclo de cierre - Tiempo mínimo de válvula cerrada" }, endpointType.genericSensor);
    shut_in_min_closed_valve_time.variableTypeId = 1295;
    shut_in_min_closed_valve_time.operationSecurityLevel = endpointOperationSecurityLevel.high;
    shut_in_min_closed_valve_time.operationWarningMessage = { "en": "You are about to change the value of Shut-in Cycle - Min. Closed Valve Time, this variable accepts values between 0 and 1080. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Ciclo de cierre - Tiempo mínimo de válvula cerrada, esta variable acepta valores entre 0 y 1080. Este cambio puede tardar un minuto en surtir efecto." };
    shut_in_min_closed_valve_time.accessType = endpointAccessType.readWriteCommand;
    var shut_in_max_closed_valve_time = endpoints.addEndpoint("SHUT_IN_MAX_CLOSED_VALVE_TIME", { en: "Shut-in Cycle - Max. Closed Valve Time", es: "Ciclo de cierre - Tiempo máximo de la válvula cerrada" }, endpointType.genericSensor);
    shut_in_max_closed_valve_time.variableTypeId = 1295;
    shut_in_max_closed_valve_time.operationSecurityLevel = endpointOperationSecurityLevel.high;
    shut_in_max_closed_valve_time.operationWarningMessage = { "en": "You are about to change the value of Shut-in Cycle - Max. Closed Valve Time, this variable accepts values between 0 and 1080. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Ciclo de cierre - Tiempo máximo de la válvula cerrada, esta variable acepta valores entre 0 y 1080. Este cambio puede tardar un minuto en surtir efecto." };
    shut_in_max_closed_valve_time.accessType = endpointAccessType.readWriteCommand;
    var shut_in_min_open_valve_time = endpoints.addEndpoint("SHUT_IN_MIN_OPEN_VALVE_TIME", { en: "Shut-in Cycle - Min. Open Valve Time", es: "Ciclo de cierre - Tiempo mínimo de válvula abierta" }, endpointType.genericSensor);
    shut_in_min_open_valve_time.variableTypeId = 1295;
    shut_in_min_open_valve_time.operationSecurityLevel = endpointOperationSecurityLevel.high;
    shut_in_min_open_valve_time.operationWarningMessage = { "en": "You are about to change the value of Shut-in Cycle - Min. Open Valve Time, this variable accepts values between 0 and 1080. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Ciclo de cierre - Tiempo mínimo de válvula abierta, esta variable acepta valores entre 0 y 1080. Este cambio puede tardar un minuto en surtir efecto." };
    shut_in_min_open_valve_time.accessType = endpointAccessType.readWriteCommand;
    var shut_in_max_open_valve_time = endpoints.addEndpoint("SHUT_IN_MAX_OPEN_VALVE_TIME", { en: "Shut-in Cycle - Max. Open Valve Time", es: "Ciclo de cierre - Tiempo máximo de la válvula abierta" }, endpointType.genericSensor);
    shut_in_max_open_valve_time.variableTypeId = 1295;
    shut_in_max_open_valve_time.operationSecurityLevel = endpointOperationSecurityLevel.high;
    shut_in_max_open_valve_time.operationWarningMessage = { "en": "You are about to change the value of Shut-in Cycle - Max. Open Valve Time, this variable accepts values between 0 and 1080. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Ciclo de cierre - Tiempo máximo de la válvula abierta, esta variable acepta valores entre 0 y 1080. Este cambio puede tardar un minuto en surtir efecto." };
    shut_in_max_open_valve_time.accessType = endpointAccessType.readWriteCommand;
    var closed_valve_time_counter = endpoints.addEndpoint("CLOSED_VALVE_TIME_COUNTER", { en: "Closed Valve Time Counter", es: "Contador de tiempo de válvula cerrada" }, endpointType.genericSensor);
    closed_valve_time_counter.variableTypeId = 1295;
    var maint_cycles_closing_time = endpoints.addEndpoint("MAINT_CYCLES_CLOSING_TIME", { en: "Maintenance Cycles - Closing Time", es: "Ciclos de mantenimiento - Tiempo de cierre" }, endpointType.genericSensor);
    maint_cycles_closing_time.variableTypeId = 1295;
    maint_cycles_closing_time.operationSecurityLevel = endpointOperationSecurityLevel.high;
    maint_cycles_closing_time.operationWarningMessage = { "en": "You are about to change the value of Maintenance Cycles - Closing Time, this variable accepts values between 0 and 1080. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Ciclos de mantenimiento - Tiempo de cierre, esta variable acepta valores entre 0 y 1080. Este cambio puede tardar un minuto en surtir efecto." };
    maint_cycles_closing_time.accessType = endpointAccessType.readWriteCommand;
    var maint_cycles_opening_time = endpoints.addEndpoint("MAINT_CYCLES_OPENING_TIME", { en: "Maintenance Cycles - Opening Time", es: "Ciclos de mantenimiento - Tiempo de apertura" }, endpointType.genericSensor);
    maint_cycles_opening_time.variableTypeId = 1295;
    maint_cycles_opening_time.operationSecurityLevel = endpointOperationSecurityLevel.high;
    maint_cycles_opening_time.operationWarningMessage = { "en": "You are about to change the value of Maintenance Cycles - Opening Time, this variable accepts values between 0 and 1080. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Ciclos de mantenimiento - Tiempo de apertura, esta variable acepta valores entre 0 y 1080. Este cambio puede tardar un minuto en surtir efecto." };
    maint_cycles_opening_time.accessType = endpointAccessType.readWriteCommand;
    var maint_cycles_min_closed_valve_time = endpoints.addEndpoint("MAINT_CYCLES_MIN_CLOSED_VALVE_TIME", { en: "Maintenance Cycles - Min. Closed Valve Time", es: "Ciclos de mantenimiento - Tiempo min. de válvula cerrada" }, endpointType.genericSensor);
    maint_cycles_min_closed_valve_time.variableTypeId = 1295;
    maint_cycles_min_closed_valve_time.operationSecurityLevel = endpointOperationSecurityLevel.high;
    maint_cycles_min_closed_valve_time.operationWarningMessage = { "en": "You are about to change the value of Maintenance Cycles - Min. Closed Valve Time, this variable accepts values between 0 and 64800. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Ciclos de mantenimiento - Tiempo min. de válvula cerrada, esta variable acepta valores entre 0 y 64800. Este cambio puede tardar un minuto en surtir efecto." };
    maint_cycles_min_closed_valve_time.accessType = endpointAccessType.readWriteCommand;
    var maint_cycles_max_closed_valve_time = endpoints.addEndpoint("MAINT_CYCLES_MAX_CLOSED_VALVE_TIME", { en: "Maintenance Cycles - Max. Closed Valve Time", es: "Ciclos de mantenimiento - Tiempo max. de válvula cerrada" }, endpointType.genericSensor);
    maint_cycles_max_closed_valve_time.variableTypeId = 1295;
    maint_cycles_max_closed_valve_time.operationSecurityLevel = endpointOperationSecurityLevel.high;
    maint_cycles_max_closed_valve_time.operationWarningMessage = { "en": "You are about to change the value of Maintenance Cycles - Max. Closed Valve Time, this variable accepts values between 0 and 64800. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Ciclos de mantenimiento - Tiempo max. de válvula cerrada, esta variable acepta valores entre 0 y 64800. Este cambio puede tardar un minuto en surtir efecto." };
    maint_cycles_max_closed_valve_time.accessType = endpointAccessType.readWriteCommand;
    var maint_cycles_min_open_valve_time = endpoints.addEndpoint("MAINT_CYCLES_MIN_OPEN_VALVE_TIME", { en: "Maintenance Cycles - Min. Open Valve Time", es: "Ciclos de mantenimiento - Tiempo min. de válvula abierta" }, endpointType.genericSensor);
    maint_cycles_min_open_valve_time.variableTypeId = 1295;
    maint_cycles_min_open_valve_time.operationSecurityLevel = endpointOperationSecurityLevel.high;
    maint_cycles_min_open_valve_time.operationWarningMessage = { "en": "You are about to change the value of Maintenance Cycles - Min. Open Valve Time, this variable accepts values between 0 and 1080. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Ciclos de mantenimiento - Tiempo min. de válvula abierta, esta variable acepta valores entre 0 y 1080. Este cambio puede tardar un minuto en surtir efecto." };
    maint_cycles_min_open_valve_time.accessType = endpointAccessType.readWriteCommand;
    var maint_cycles_max_open_valve_time = endpoints.addEndpoint("MAINT_CYCLES_MAX_OPEN_VALVE_TIME", { en: "Maintenance Cycles - Max. Open Valve Time", es: "Ciclos de mantenimiento - Tiempo max. de válvula abierta" }, endpointType.genericSensor);
    maint_cycles_max_open_valve_time.variableTypeId = 1295;
    maint_cycles_max_open_valve_time.operationSecurityLevel = endpointOperationSecurityLevel.high;
    maint_cycles_max_open_valve_time.operationWarningMessage = { "en": "You are about to change the value of Maintenance Cycles - Max. Open Valve Time, this variable accepts values between 0 and 1080. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Ciclos de mantenimiento - Tiempo max. de válvula abierta, esta variable acepta valores entre 0 y 1080. Este cambio puede tardar un minuto en surtir efecto." };
    maint_cycles_max_open_valve_time.accessType = endpointAccessType.readWriteCommand;
    var open_valve_time_counter = endpoints.addEndpoint("OPEN_VALVE_TIME_COUNTER", { en: "Open Valve Time Counter", es: "Contador de tiempo de válvula abierta" }, endpointType.genericSensor);
    open_valve_time_counter.variableTypeId = 1295;
    var default_upstream_temp = endpoints.addEndpoint("DEFAULT_UPSTREAM_TEMP", { en: "Default Upstream Temperature", es: "Temperatura predeterminada aguas arriba" }, endpointType.temperatureSensor);
    default_upstream_temp.operationSecurityLevel = endpointOperationSecurityLevel.high;
    default_upstream_temp.operationWarningMessage = { "en": "You are about to change the value of Default Upstream Temperature, this variable accepts values between 0 and 100. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Temperatura predeterminada aguas arriba, esta variable acepta valores entre 0 y 100. Este cambio puede tardar un minuto en surtir efecto." };
    default_upstream_temp.accessType = endpointAccessType.readWriteCommand;
    var valve_status = endpoints.addEndpoint("VALVE_STATUS", { en: "Valve Status", es: "Estado de valvula" }, endpointType.genericSensor);
    valve_status.variableTypeId = 1298;
    var cb = endpoints.addEndpoint("CB", { en: "Battery voltage CB", es: "Tensión de batería CB" }, endpointType.voltageSensor);
    var b_idp = endpoints.addEndpoint("B_IDP", { en: "IDP Vsupply", es: "Tensión de batería IDP" }, endpointType.voltageSensor);
    var pb = endpoints.addEndpoint("PB", { en: "Battery voltage PB", es: "Tensión de batería PB" }, endpointType.voltageSensor);
    var last_valve_op = endpoints.addEndpoint("LAST_VALVE_OP", { en: "Last Valve Operation", es: "Ultima operación de válvula" }, endpointType.genericSensor);
    last_valve_op.variableTypeId = 1302;
    var last_op_cause = endpoints.addEndpoint("LAST_OP_CAUSE", { en: "Last Operation Cause", es: "Causa de la ultima operación" }, endpointType.genericSensor);
    last_op_cause.variableTypeId = 1301;
    var gas_flow_level = endpoints.addEndpoint("GAS_FLOW_LEVEL", { en: "Gas Flow Level", es: "Nivel de flujo de gas" }, endpointType.genericSensor);
    gas_flow_level.variableTypeId = 1285;
    var firmware = endpoints.addEndpoint("FIRMWARE", { en: "Firmware Version", es: "Versión de Firmware" }, endpointType.genericSensor);
    firmware.variableTypeId = 1292;
    var serial_lsw = endpoints.addEndpoint("SERIAL_LSW", { en: "Serial Number", es: "Número de serie" }, endpointType.genericSensor);
    serial_lsw.variableTypeId = 1292;
    var alternative_use = endpoints.addEndpoint("ALTERNATIVE_USE", { en: "Alternative use", es: "Alternativa de uso" }, endpointType.genericSensor);
    alternative_use.variableTypeId = 1300;
    var cmd_open = endpoints.addEndpoint("CMD_OPEN", { en: "Open Command", es: "Comando de apertura" }, endpointType.genericSensor);
    cmd_open.variableTypeId = 1279;
    cmd_open.operationSecurityLevel = endpointOperationSecurityLevel.high;
    cmd_open.operationWarningMessage = { "en": "You are about to change the value of Open Command. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de Comando de apertura. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    cmd_open.accessType = endpointAccessType.readWriteCommand;
    var arrival_counter = endpoints.addEndpoint("ARRIVAL_COUNTER", { en: "Arrival counter BCD", es: "Arrival counter BCD" }, endpointType.genericSensor);
    arrival_counter.variableTypeId = 1292;
    var cmd_close = endpoints.addEndpoint("CMD_CLOSE", { en: "Close Command", es: "Comando de cierre" }, endpointType.genericSensor);
    cmd_close.variableTypeId = 1279;
    cmd_close.operationSecurityLevel = endpointOperationSecurityLevel.high;
    cmd_close.operationWarningMessage = { "en": "You are about to change the value of Close Command. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de Comando de cierre. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    cmd_close.accessType = endpointAccessType.readWriteCommand;
    var cmd_rst_err = endpoints.addEndpoint("CMD_RST_ERR", { en: "Clear Alarms Command", es: "Comando para resetear alarmas" }, endpointType.genericSensor);
    cmd_rst_err.variableTypeId = 1279;
    cmd_rst_err.operationSecurityLevel = endpointOperationSecurityLevel.high;
    cmd_rst_err.operationWarningMessage = { "en": "You are about to change the value of Clear Alarms Command. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de Comando para resetear alarmas. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    cmd_rst_err.accessType = endpointAccessType.readWriteCommand;
    var cmd_reset = endpoints.addEndpoint("CMD_RESET", { en: "Reset Command", es: "Comando de reseteo" }, endpointType.genericSensor);
    cmd_reset.variableTypeId = 1279;
    cmd_reset.operationSecurityLevel = endpointOperationSecurityLevel.high;
    cmd_reset.operationWarningMessage = { "en": "You are about to change the value of Reset Command. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de Comando de reseteo. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    cmd_reset.accessType = endpointAccessType.readWriteCommand;
    var time_type = endpoints.addEndpoint("TIME_TYPE", { en: "Time type", es: "Tipo de tiempo" }, endpointType.genericSensor);
    time_type.variableTypeId = 1435;
    var last_action = endpoints.addEndpoint("LAST_ACTION", { en: "Last action", es: "Ultima acción" }, endpointType.genericSensor);
    last_action.variableTypeId = 1436;
    var e_last_action_alarms = endpoints.addEndpoint("LAST_ACTION_ALARMS", { en: "Last action - Alerts", es: "Ultima acción - alertas" }, endpointType.genericSensor);
    e_last_action_alarms.variableTypeId = 1436;
    var e_firmware_changed = endpoints.addEndpoint("FIRMWARE_CHANGED", { en: "Firmware changed", es: "Firmware actualizado" }, endpointType.genericSensor);
    e_firmware_changed.variableTypeId = 1437;
    var last_online_time = endpoints.addEndpoint("LAST_ONLINE_TIME", { en: "Latest Endpoint update - UTC", es: "Ultima actualización de Endpoint - UTC" }, endpointType.genericSensor);
    last_online_time.variableTypeId = 1303;
    var vc_valve_status = endpoints.addEndpoint("VC_VALVE_STATUS", { en: "Valve Status (last 24 hs)", es: "Estado de Válvula (ult. 24 hs)" }, endpointType.genericSensor);
    vc_valve_status.variableTypeId = 1298;
    var vc_op_mode = endpoints.addEndpoint("VC_OP_MODE", { en: "OP Mode (last 24 hs)", es: "Modo de Operación (ult. 24 hs)" }, endpointType.genericSensor);
    vc_op_mode.variableTypeId = 1288;
    var vc_open_time = endpoints.addEndpoint("VC_OPEN_TIME", { en: "Open Time (last 24 hs)", es: "Tiempo Abierto (ult. 24 hs)" }, endpointType.genericSensor);
    vc_open_time.variableTypeId = 1061;
    var vc_close_time = endpoints.addEndpoint("VC_CLOSE_TIME", { en: "Close Time (last 24 hs)", es: "Tiempo Cerrado (ult. 24 hs)" }, endpointType.genericSensor);
    vc_close_time.variableTypeId = 1061;
    var vc_whp_min = endpoints.addEndpoint("VC_WHP_MIN", { en: "Min WHP (last 24 hs)", es: "Min WHP (ult. 24 hs)" }, endpointType.pressureSensor);
    var vc_whp_pro = endpoints.addEndpoint("VC_WHP_PRO", { en: "Avg WHP (last 24 hs)", es: "Prom. WHP (ult. 24 hs)" }, endpointType.pressureSensor);
    var vc_whp_max = endpoints.addEndpoint("VC_WHP_MAX", { en: "Max WHP (last 24 hs)", es: "Max WHP (ult. 24 hs)" }, endpointType.pressureSensor);
    var vc_gas_flow_rate_min = endpoints.addEndpoint("VC_GAS_FLOW_RATE_MIN", { en: "Min Inst. Flow (last 24 hs)", es: "Min Caudal Inst. (ult. 24 hs)" }, endpointType.genericSensor);
    vc_gas_flow_rate_min.variableTypeId = 1432;
    var vc_gas_flow_rate_max = endpoints.addEndpoint("VC_GAS_FLOW_RATE_MAX", { en: "Max Inst. Flow (last 24 hs)", es: "Max Caudal Inst. (ult. 24 hs)" }, endpointType.genericSensor);
    vc_gas_flow_rate_max.variableTypeId = 1432;
    var vc_estimated_gas_prod = endpoints.addEndpoint("VC_ESTIMATED_GAS_PROD", { en: "Daily Total (last 24 hs)", es: "Total Diario (ult. 24 hs)" }, endpointType.genericSensor);
    vc_estimated_gas_prod.variableTypeId = 1432;
    var vc_var_estimated_gas_prod = endpoints.addEndpoint("VC_VAR_ESTIMATED_GAS_PROD", { en: "Var % (vs Last Day)", es: "Var % (vs Día Anterior)" }, endpointType.genericSensor);
    vc_var_estimated_gas_prod.variableTypeId = 1335;
    var vc_var_estimated_gas_prod_discreta = endpoints.addEndpoint("VC_VAR_ESTIMATED_GAS_PROD_DISCRETA", { en: "Var Status (vs Last Day)", es: "Var Discreta (vs Día Anterior)" }, endpointType.genericSensor);
    vc_var_estimated_gas_prod_discreta.variableTypeId = 1336;
    var vc_var_estimated_gas_prod_semanal = endpoints.addEndpoint("VC_VAR_ESTIMATED_GAS_PROD_SEMANAL", { en: "Var % (vs Last Week)", es: "Var % (vs Semana Anterior)" }, endpointType.genericSensor);
    vc_var_estimated_gas_prod_semanal.variableTypeId = 1335;
    var vc_var_estimated_gas_prod_discreta_semanal = endpoints.addEndpoint("VC_VAR_ESTIMATED_GAS_PROD_DISCRETA_SEMANAL", { en: "Var Status (vs Last Week)", es: "Var Discreta (vs Semana Anterior)" }, endpointType.genericSensor);
    vc_var_estimated_gas_prod_discreta_semanal.variableTypeId = 1336;
    var vc_whp_min_semanal = endpoints.addEndpoint("VC_WHP_MIN_SEMANAL", { en: "Min WHP (last week)", es: "Min WHP (semanal)" }, endpointType.genericSensor);
    vc_whp_min_semanal.variableTypeId = 1433;
    var vc_whp_pro_semanal = endpoints.addEndpoint("VC_WHP_PRO_SEMANAL", { en: "Avg WHP (last week)", es: "Prom. WHP (semanal)" }, endpointType.genericSensor);
    vc_whp_pro_semanal.variableTypeId = 1433;
    var vc_whp_max_semanal = endpoints.addEndpoint("VC_WHP_MAX_SEMANAL", { en: "Max WHP (last week)", es: "Max WHP (semanal)" }, endpointType.genericSensor);
    vc_whp_max_semanal.variableTypeId = 1433;
    var vc_gas_flow_rate_min_semanal = endpoints.addEndpoint("VC_GAS_FLOW_RATE_MIN_SEMANAL", { en: "Min Inst. Flow (last week)", es: "Min Caudal Inst. (semanal)" }, endpointType.genericSensor);
    vc_gas_flow_rate_min_semanal.variableTypeId = 1432;
    var vc_gas_flow_rate_max_semanal = endpoints.addEndpoint("VC_GAS_FLOW_RATE_MAX_SEMANAL", { en: "Max Inst. Flow (last week)", es: "Max Caudal Inst. (semanal)" }, endpointType.genericSensor);
    vc_gas_flow_rate_max_semanal.variableTypeId = 1432;
    var vc_estimated_gas_prod_semanal = endpoints.addEndpoint("VC_ESTIMATED_GAS_PROD_SEMANAL", { en: "Weekly Total", es: "Total Semanal" }, endpointType.genericSensor);
    vc_estimated_gas_prod_semanal.variableTypeId = 1432;
    var vc_gas_prod_acum_semanal = endpoints.addEndpoint("VC_GAS_PROD_ACUM_SEMANAL", { en: "Weekly Flow Acum", es: "Caudal Acum Diario" }, endpointType.genericSensor);
    vc_gas_prod_acum_semanal.variableTypeId = 1432;
    var vc_estado_abierto_semanal = endpoints.addEndpoint("VC_ESTADO_ABIERTO_SEMANAL", { en: "Open % (last week)", es: "Abierto % (semanal)" }, endpointType.genericSensor);
    vc_estado_abierto_semanal.variableTypeId = 1335;
    var vc_estado_cerrado_semanal = endpoints.addEndpoint("VC_ESTADO_CERRADO_SEMANAL", { en: "Close % (last week)", es: "Cerrado % (semanal)" }, endpointType.genericSensor);
    vc_estado_cerrado_semanal.variableTypeId = 1335;
    var vc_modo_automatico = endpoints.addEndpoint("VC_MODO_AUTOMATICO", { en: "Automatic % (last week)", es: "Automatico % (semanal)" }, endpointType.genericSensor);
    vc_modo_automatico.variableTypeId = 1335;
    var vc_modo_manual = endpoints.addEndpoint("VC_MODO_MANUAL", { en: "Manual % (last week)", es: "Manual % (semanal)" }, endpointType.genericSensor);
    vc_modo_manual.variableTypeId = 1335;
    var whp_kgcm2 = endpoints.addEndpoint("WHP_KGCM2", { en: "Wellhead pressure - kg/cm²", es: "Presión de cabeza de pozo - kg/cm²" }, endpointType.genericSensor);
    whp_kgcm2.variableTypeId = 1433;
    var lp_kgcm2 = endpoints.addEndpoint("LP_KGCM2", { en: "Line pressure - kg/cm²", es: "Presión de linea - kg/cm²" }, endpointType.genericSensor);
    lp_kgcm2.variableTypeId = 1433;
    var gas_flow_rate_per_day = endpoints.addEndpoint("GAS_FLOW_RATE_PER_DAY", { en: "Instant gas flow rate m³/d", es: "Caudal instantaneo de gas m³/d" }, endpointType.genericSensor);
    gas_flow_rate_per_day.variableTypeId = 1432;
    var ap = endpoints.addEndpoint("AP", { en: "Actuator pressure", es: "Presión del actuador" }, endpointType.pressureSensor);
    var shut_in_closing_pre = endpoints.addEndpoint("SHUT_IN_CLOSING_PRE", { en: "Shut-in Cycle - Closing Pressure", es: "Ciclo de cierre - Presión de cierre" }, endpointType.pressureSensor);
    shut_in_closing_pre.operationSecurityLevel = endpointOperationSecurityLevel.high;
    shut_in_closing_pre.operationWarningMessage = { "en": "You are about to change the value of Shut-in Cycle - Closing Pressure, this variable accepts values between 50 and 6000. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Ciclo de cierre - Presión de cierre, esta variable acepta valores entre 50 y 6000. Este cambio puede tardar un minuto en surtir efecto." };
    shut_in_closing_pre.accessType = endpointAccessType.readWriteCommand;
    var shut_in_opening_ratio = endpoints.addEndpoint("SHUT_IN_OPENING_RATIO", { en: "Shut-in Cycle - Opening WHP/LP Ratio", es: "Ciclo de cierre -Relacion WHP/LP de apertura" }, endpointType.genericSensor);
    shut_in_opening_ratio.variableTypeId = 1292;
    shut_in_opening_ratio.operationSecurityLevel = endpointOperationSecurityLevel.high;
    shut_in_opening_ratio.operationWarningMessage = { "en": "You are about to change the value of Shut-in Cycle - Opening WHP/LP Ratio, this variable accepts values between 0 and 5. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Ciclo de cierre -Relacion WHP/LP de apertura, esta variable acepta valores entre 0 y 5. Este cambio puede tardar un minuto en surtir efecto." };
    shut_in_opening_ratio.accessType = endpointAccessType.readWriteCommand;
    var shut_in_closing_ratio = endpoints.addEndpoint("SHUT_IN_CLOSING_RATIO", { en: "Shut-in Cycle - Closing WHP/LP Ratio", es: "Ciclo de cierre - Relacion WHP/LP de cierre" }, endpointType.genericSensor);
    shut_in_closing_ratio.variableTypeId = 1292;
    shut_in_closing_ratio.operationSecurityLevel = endpointOperationSecurityLevel.high;
    shut_in_closing_ratio.operationWarningMessage = { "en": "You are about to change the value of Shut-in Cycle - Closing WHP/LP Ratio, this variable accepts values between 0 and 5. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Ciclo de cierre - Relacion WHP/LP de cierre, esta variable acepta valores entre 0 y 5. Este cambio puede tardar un minuto en surtir efecto." };
    shut_in_closing_ratio.accessType = endpointAccessType.readWriteCommand;
    var maint_cycles_closing_pre = endpoints.addEndpoint("MAINT_CYCLES_CLOSING_PRE", { en: "Maintenance Cycles - Closing Pressure", es: "Ciclos de mantenimiento - Presion de cierre" }, endpointType.pressureSensor);
    maint_cycles_closing_pre.operationSecurityLevel = endpointOperationSecurityLevel.high;
    maint_cycles_closing_pre.operationWarningMessage = { "en": "You are about to change the value of Maintenance Cycles - Closing Pressure, this variable accepts values between 50 and 6000. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Ciclos de mantenimiento - Presion de cierre, esta variable acepta valores entre 50 y 6000. Este cambio puede tardar un minuto en surtir efecto." };
    maint_cycles_closing_pre.accessType = endpointAccessType.readWriteCommand;
    var maint_cycles_opening_ratio = endpoints.addEndpoint("MAINT_CYCLES_OPENING_RATIO", { en: "Maintenance Cycles - Opening WHP/LP Ratio", es: "Ciclos de mantenimiento -Relacion WHP/LP de apertura" }, endpointType.genericSensor);
    maint_cycles_opening_ratio.variableTypeId = 1292;
    maint_cycles_opening_ratio.operationSecurityLevel = endpointOperationSecurityLevel.high;
    maint_cycles_opening_ratio.operationWarningMessage = { "en": "You are about to change the value of Maintenance Cycles - Opening WHP/LP Ratio, this variable accepts values between 0 and 5. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Ciclos de mantenimiento -Relacion WHP/LP de apertura, esta variable acepta valores entre 0 y 5. Este cambio puede tardar un minuto en surtir efecto." };
    maint_cycles_opening_ratio.accessType = endpointAccessType.readWriteCommand;
    var maint_cycles_closing_ratio = endpoints.addEndpoint("MAINT_CYCLES_CLOSING_RATIO", { en: "Maintenance Cycles - Closing WHP/LP Ratio", es: "Ciclos de mantenimiento -Relacion WHP/LP de cierre" }, endpointType.genericSensor);
    maint_cycles_closing_ratio.variableTypeId = 1292;
    maint_cycles_closing_ratio.operationSecurityLevel = endpointOperationSecurityLevel.high;
    maint_cycles_closing_ratio.operationWarningMessage = { "en": "You are about to change the value of Maintenance Cycles - Closing WHP/LP Ratio, this variable accepts values between 0 and 5. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Ciclos de mantenimiento -Relacion WHP/LP de cierre, esta variable acepta valores entre 0 y 5. Este cambio puede tardar un minuto en surtir efecto." };
    maint_cycles_closing_ratio.accessType = endpointAccessType.readWriteCommand;
    var sync_day_week = endpoints.addEndpoint("SYNC_DAY_WEEK", { en: "Synchronism - Day of Week", es: "Sincronización - Día de la semana" }, endpointType.genericSensor);
    sync_day_week.variableTypeId = 1519;
    sync_day_week.operationSecurityLevel = endpointOperationSecurityLevel.high;
    sync_day_week.operationWarningMessage = { "en": "You are about to change the value of Synchronism - Day of Week, this variable accepts values between 0 and 7. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Sincronización - Día de la semana, esta variable acepta valores entre 0 y 7. Este cambio puede tardar un minuto en surtir efecto." };
    sync_day_week.accessType = endpointAccessType.readWriteCommand;
    var sync_hour = endpoints.addEndpoint("SYNC_HOUR", { en: "Synchronism - Hour", es: "Sincronización - Hora" }, endpointType.genericSensor);
    sync_hour.variableTypeId = 1292;
    sync_hour.operationSecurityLevel = endpointOperationSecurityLevel.high;
    sync_hour.operationWarningMessage = { "en": "You are about to change the value of Synchronism - Hour, this variable accepts values between 0 and 23. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Sincronización - Hora, esta variable acepta valores entre 0 y 23. Este cambio puede tardar un minuto en surtir efecto." };
    sync_hour.accessType = endpointAccessType.readWriteCommand;
    var vc_var_estimated_gas_prod_mensual = endpoints.addEndpoint("VC_VAR_ESTIMATED_GAS_PROD_MENSUAL", { en: "Var % (vs last month)", es: "Var % (vs Mes Anterior)" }, endpointType.genericSensor);
    vc_var_estimated_gas_prod_mensual.variableTypeId = 1335;
    var vc_var_estimated_gas_prod_discreta_mensual = endpoints.addEndpoint("VC_VAR_ESTIMATED_GAS_PROD_DISCRETA_MENSUAL", { en: "Var Status (vs last month)", es: "Var Discreta (vs Mes Anterior)" }, endpointType.genericSensor);
    vc_var_estimated_gas_prod_discreta_mensual.variableTypeId = 1336;
    var vc_whp_min_mensual = endpoints.addEndpoint("VC_WHP_MIN_MENSUAL", { en: "Min WHP (last month)", es: "Min WHP (mensual)" }, endpointType.genericSensor);
    vc_whp_min_mensual.variableTypeId = 1433;
    var vc_whp_pro_mensual = endpoints.addEndpoint("VC_WHP_PRO_MENSUAL", { en: "Avg WHP (last month)", es: "Prom. WHP (mensual)" }, endpointType.genericSensor);
    vc_whp_pro_mensual.variableTypeId = 1433;
    var vc_whp_max_mensual = endpoints.addEndpoint("VC_WHP_MAX_MENSUAL", { en: "Max WHP (last month)", es: "Max WHP (mensual)" }, endpointType.genericSensor);
    vc_whp_max_mensual.variableTypeId = 1433;
    var vc_gas_flow_rate_min_mensual = endpoints.addEndpoint("VC_GAS_FLOW_RATE_MIN_MENSUAL", { en: "Min Inst. Flow (last month)", es: "Min Caudal Inst. (mensual)" }, endpointType.genericSensor);
    vc_gas_flow_rate_min_mensual.variableTypeId = 1432;
    var vc_gas_flow_rate_max_mensual = endpoints.addEndpoint("VC_GAS_FLOW_RATE_MAX_MENSUAL", { en: "Max Inst. Flow (last month)", es: "Max Caudal Inst. (mensual)" }, endpointType.genericSensor);
    vc_gas_flow_rate_max_mensual.variableTypeId = 1432;
    var vc_estimated_gas_prod_mensual = endpoints.addEndpoint("VC_ESTIMATED_GAS_PROD_MENSUAL", { en: "Monthly Total", es: "Total mensual" }, endpointType.genericSensor);
    vc_estimated_gas_prod_mensual.variableTypeId = 1432;
    var vc_gas_prod_acum_mensual = endpoints.addEndpoint("VC_GAS_PROD_ACUM_MENSUAL", { en: "Weekly Flow Acum", es: "Caudal Acum Diario" }, endpointType.genericSensor);
    vc_gas_prod_acum_mensual.variableTypeId = 1432;
    var vc_estado_abierto_mensual = endpoints.addEndpoint("VC_ESTADO_ABIERTO_MENSUAL", { en: "Open % (last month)", es: "Abierto % (mensual)" }, endpointType.genericSensor);
    vc_estado_abierto_mensual.variableTypeId = 1335;
    var vc_estado_cerrado_mensual = endpoints.addEndpoint("VC_ESTADO_CERRADO_MENSUAL", { en: "Close % (last month)", es: "Cerrado % (mensual)" }, endpointType.genericSensor);
    vc_estado_cerrado_mensual.variableTypeId = 1335;
    var vc_modo_automatico_mensual = endpoints.addEndpoint("VC_MODO_AUTOMATICO_MENSUAL", { en: "Automatic % (last month)", es: "Automatico % (mensual)" }, endpointType.genericSensor);
    vc_modo_automatico_mensual.variableTypeId = 1335;
    var vc_modo_manual_mensual = endpoints.addEndpoint("VC_MODO_MANUAL_MENSUAL", { en: "Manual % (last month)", es: "Manual % (mensual)" }, endpointType.genericSensor);
    vc_modo_manual_mensual.variableTypeId = 1335;
    var vc_anomalies = endpoints.addEndpoint("VC_ANOMALIES", { en: "Abnormal Behavior", es: "Comportamientos anómalos" }, endpointType.genericSensor);
    vc_anomalies.variableTypeId = 1529;
    var gas_flow_rate_sachdeva = endpoints.addEndpoint("GAS_FLOW_RATE_SACHDEVA", { en: "Gas flow rate (Sachdeva)", es: "Caudal de gas (Sachdeva)" }, endpointType.genericSensor);
    gas_flow_rate_sachdeva.variableTypeId = 1285;
    var gas_flow_rate_guo = endpoints.addEndpoint("GAS_FLOW_RATE_GUO", { en: "Gas flow rate (Guo)", es: "Caudal de gas (Guo)" }, endpointType.genericSensor);
    gas_flow_rate_guo.variableTypeId = 1285;
    var gas_flow_rate_aga1 = endpoints.addEndpoint("GAS_FLOW_RATE_AGA1", { en: "Gas flow rate (AGA1)", es: "Caudal de gas (AGA1))" }, endpointType.genericSensor);
    gas_flow_rate_aga1.variableTypeId = 1285;
    var gas_flow_rate_aga2 = endpoints.addEndpoint("GAS_FLOW_RATE_AGA2", { en: "Gas flow rate (AGA2)", es: "Caudal de gas (AGA2)" }, endpointType.genericSensor);
    gas_flow_rate_aga2.variableTypeId = 1285;
    var gas_flow_rate_ext_flowmeter = endpoints.addEndpoint("GAS_FLOW_RATE_EXT_FLOWMETER", { en: "Gas flow rate (Ext. Flowmeter)", es: "Caudal de gas (Caudalimetro externo)" }, endpointType.genericSensor);
    gas_flow_rate_ext_flowmeter.variableTypeId = 1285;
    var well_condition = endpoints.addEndpoint("WELL_CONDITION", { en: "Well Condition", es: "Condicion de pozo" }, endpointType.genericSensor);
    well_condition.variableTypeId = 1554;
    var well_head_pre_control = endpoints.addEndpoint("WELL_HEAD_PRE_CONTROL", { en: "Well head pressure CONTROL", es: "Presión de Cabeza de pozo - CONTROL" }, endpointType.pressureSensor);
    well_head_pre_control.operationSecurityLevel = endpointOperationSecurityLevel.high;
    well_head_pre_control.operationWarningMessage = { "en": "You are about to change the value of Well head pressure CONTROL, this variable accepts values between 0 and 8000. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Presión de Cabeza de pozo - CONTROL, esta variable acepta valores entre 0 y 8000. Este cambio puede tardar un minuto en surtir efecto." };
    well_head_pre_control.accessType = endpointAccessType.readWriteCommand;
    var line_pre_control = endpoints.addEndpoint("LINE_PRE_CONTROL", { en: "Line pressure CONTROL", es: "Presión de Linea - CONTROL" }, endpointType.pressureSensor);
    line_pre_control.operationSecurityLevel = endpointOperationSecurityLevel.high;
    line_pre_control.operationWarningMessage = { "en": "You are about to change the value of Line pressure CONTROL, this variable accepts values between 0 and 8000. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Presión de Linea - CONTROL, esta variable acepta valores entre 0 y 8000. Este cambio puede tardar un minuto en surtir efecto." };
    line_pre_control.accessType = endpointAccessType.readWriteCommand;
    var gas_flow_rate_control = endpoints.addEndpoint("GAS_FLOW_RATE_CONTROL", { en: "Gas Flow Rate CONTROL", es: "Caudal de Gas - CONTROL" }, endpointType.genericSensor);
    gas_flow_rate_control.variableTypeId = 1285;
    gas_flow_rate_control.operationSecurityLevel = endpointOperationSecurityLevel.high;
    gas_flow_rate_control.operationWarningMessage = { "en": "You are about to change the value of Gas Flow Rate CONTROL, this variable accepts values between 0 and 60000. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Caudal de Gas - CONTROL, esta variable acepta valores entre 0 y 60000. Este cambio puede tardar un minuto en surtir efecto." };
    gas_flow_rate_control.accessType = endpointAccessType.readWriteCommand;
    var aga_1_eq_corr = endpoints.addEndpoint("AGA_1_EQ_CORR", { en: "AGA1 Eq. Correction Factor", es: "Factor de Corrección de Ecuación AGA1" }, endpointType.genericSensor);
    aga_1_eq_corr.variableTypeId = 1292;
    aga_1_eq_corr.operationSecurityLevel = endpointOperationSecurityLevel.high;
    aga_1_eq_corr.operationWarningMessage = { "en": "You are about to change the value of AGA1 Eq. Correction Factor, this variable accepts values between 0.1 and 10. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Factor de Corrección de Ecuación AGA1, esta variable acepta valores entre 0.1 y 10. Este cambio puede tardar un minuto en surtir efecto." };
    aga_1_eq_corr.accessType = endpointAccessType.readWriteCommand;
    var aga_2_eq_corr = endpoints.addEndpoint("AGA_2_EQ_CORR", { en: "AGA2 Eq. Correction Factor", es: "Factor de Corrección de Ecuación AGA2" }, endpointType.genericSensor);
    aga_2_eq_corr.variableTypeId = 1292;
    aga_2_eq_corr.operationSecurityLevel = endpointOperationSecurityLevel.high;
    aga_2_eq_corr.operationWarningMessage = { "en": "You are about to change the value of AGA2 Eq. Correction Factor, this variable accepts values between 0.1 and 10. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Factor de Corrección de Ecuación AGA2, esta variable acepta valores entre 0.1 y 10. Este cambio puede tardar un minuto en surtir efecto." };
    aga_2_eq_corr.accessType = endpointAccessType.readWriteCommand;
    var hydraulic_failure_enable = endpoints.addEndpoint("HYDRAULIC_FAILURE_ENABLE", { en: "Hydraulic Failure Enabled", es: "Falla Hidráulica Habilitada" }, endpointType.genericSensor);
    hydraulic_failure_enable.variableTypeId = 1555;
    var well_condition_logic_enable = endpoints.addEndpoint("WELL_CONDITION_LOGIC_ENABLE", { en: "Logic Based On Well Condition Enabled", es: "Logica basada en COndicion de Cabeza de Pozo Habilitada" }, endpointType.genericSensor);
    well_condition_logic_enable.variableTypeId = 1555;


    //-------------------------------------------------------------------------------------------------------
    //Configuración de alarmas:

    //-------------------------------------------------------------------------------------------------------
    // Mails:
    const mailsSeverityInformation = [
        "@ab:10",
        "@ab:37",
        "@ab:50",
        "@ab:51",
        "@ab:52",
        "@ab:53",
    ];
    const mailsSeverityLow = [
        "@ab:10",
        "@ab:37",
        "@ab:50",
        "@ab:51",
        "@ab:52",
        "@ab:53",
    ];
    const mailsSeverityMedium = [
        "@ab:10",
        "@ab:37",
        "@ab:50",
        "@ab:51",
        "@ab:52",
        "@ab:53",
    ];
    const mailsSeverityHigh = [
        "@ab:10",
        "@ab:37",
        "@ab:50",
        "@ab:51",
        "@ab:52",
        "@ab:53",
    ];

    //-------------------------------------------------------------------------------------------------------
    // Templates:
    const alertsMailInformationTemplates = {
        openTemplate: "",
        closeTemplate: "",
    };
    const alertsMailLowTemplates = { openTemplate: "", closeTemplate: "" };
    const alertsMailMediumTemplates = { openTemplate: "", closeTemplate: "" };
    const alertsMailHighTemplates = { openTemplate: "", closeTemplate: "" };

    
    alertsMailInformationTemplates.openSubjectTemplate = `Nueva notificación - {DEVICE_NAME} - {ENDPOINT_NAME}`
    alertsMailInformationTemplates.closeSubjectTemplate = `Closed Alert - {DEVICE_NAME} - {ENDPOINT_NAME}`
    
    alertsMailLowTemplates.openSubjectTemplate = `Alerta encendida - {DEVICE_NAME} - {ENDPOINT_NAME}`
    alertsMailLowTemplates.closeSubjectTemplate = `Alerta finalizada - {DEVICE_NAME} - {ENDPOINT_NAME}`

    alertsMailMediumTemplates.openSubjectTemplate = `Alerta encendida - {DEVICE_NAME} - {ENDPOINT_NAME}`
    alertsMailMediumTemplates.closeSubjectTemplate = `Alerta fianlizada - {DEVICE_NAME} - {ENDPOINT_NAME}`

    alertsMailHighTemplates.openSubjectTemplate = `Alarma encendida - {DEVICE_NAME} - {ENDPOINT_NAME}`
    alertsMailHighTemplates.closeSubjectTemplate = `Alarma finalizada - {DEVICE_NAME} - {ENDPOINT_NAME}`

    alertsMailInformationTemplates.openTemplate = templateOfTemplates
        .replace(/{{IMAGE_PNG}}/gi, "info-msuite.png")
        .replace(/{{NUEVA_ALERTA}}/gi, "INFORMACIÓN")
        .replace(/{{TEXT_ABOUT}}/gi, "Nueva notificación para el dispositivo:")
        .replace(/{{BE_NOTIFIED}}/gi, "Serás notificado si algo cambia.");

    alertsMailMediumTemplates.openTemplate = templateOfTemplates
        .replace(/{{IMAGE_PNG}}/gi, "alerta-msuite.png")
        .replace(/{{NUEVA_ALERTA}}/gi, "NUEVA ALERTA")
        .replace(
            /{{TEXT_ABOUT}}/gi,
            "Una nueva alerta fue abierta para el dispositivo:"
        )
        .replace(/{{BE_NOTIFIED}}/gi, "Serás notificado si la alerta se cierra.");
    alertsMailMediumTemplates.closeTemplate = templateOfTemplates
        .replace(/{{IMAGE_PNG}}/gi, "notificacion-msuite.png")
        .replace(/{{NUEVA_ALERTA}}/gi, "ALERTA CERRADA")
        .replace(/{{TEXT_ABOUT}}/gi, "Una alerta fue cerrada para el dispositivo:")
        .replace(
            /{{BE_NOTIFIED}}/gi,
            "Serás notificado si la alerta se vuelve a abrir."
        );

    alertsMailHighTemplates.openTemplate = templateOfTemplates
        .replace(/{{IMAGE_PNG}}/gi, "alarma-msuite.png")
        .replace(/{{NUEVA_ALERTA}}/gi, "NUEVA ALARMA")
        .replace(
            /{{TEXT_ABOUT}}/gi,
            "Una nueva alarma fue abierta para el dispositivo:"
        )
        .replace(/{{BE_NOTIFIED}}/gi, "Serás notificado si la alarma se cierra.");
    alertsMailHighTemplates.closeTemplate = templateOfTemplates
        .replace(/{{IMAGE_PNG}}/gi, "notificacion-msuite.png")
        .replace(/{{NUEVA_ALERTA}}/gi, "ALARMA CERRADA")
        .replace(/{{TEXT_ABOUT}}/gi, "Una alarma fue cerrada para el dispositivo:")
        .replace(
            /{{BE_NOTIFIED}}/gi,
            "Serás notificado si la alarma se vuelve a abrir."
        );

    //-------------------------------------------------------------------------------------------------------
    // Creación:

    let pb_alertMedium = pb.addAlert();
    pb_alertMedium.variableTypeId = variableType.voltage;
    pb_alertMedium.conditionType = conditionType.lowerOrEqual;
    pb_alertMedium.threshold = 11;
    pb_alertMedium.normalConditionType = conditionType.greater;
    pb_alertMedium.normalThreshold = 11;
    pb_alertMedium.severity = alarmSeverity.medium;
    pb_alertMedium.notificationEmails = mailsSeverityMedium;
    pb_alertMedium.emailTemplates = alertsMailMediumTemplates;

    let pb_alertHigh = pb.addAlert();
    pb_alertHigh.variableTypeId = variableType.voltage;
    pb_alertHigh.conditionType = conditionType.lowerOrEqual;
    pb_alertHigh.threshold = 10;
    pb_alertHigh.minimumDurationSeconds = 120;
    pb_alertHigh.normalConditionType = conditionType.greater;
    pb_alertHigh.normalThreshold = 10;
    pb_alertHigh.severity = alarmSeverity.high;
    pb_alertHigh.notificationEmails = mailsSeverityHigh;
    pb_alertHigh.emailTemplates = alertsMailHighTemplates;

    let b_idp_alertMedium = b_idp.addAlert();
    b_idp_alertMedium.variableTypeId = variableType.voltage;
    b_idp_alertMedium.conditionType = conditionType.lowerOrEqual;
    b_idp_alertMedium.threshold = 11;
    b_idp_alertMedium.normalConditionType = conditionType.greater;
    b_idp_alertMedium.normalThreshold = 11;
    b_idp_alertMedium.severity = alarmSeverity.medium;
    b_idp_alertMedium.notificationEmails = mailsSeverityMedium;
    b_idp_alertMedium.emailTemplates = alertsMailMediumTemplates;

    let b_idp_alertHigh = b_idp.addAlert();
    b_idp_alertHigh.variableTypeId = variableType.voltage;
    b_idp_alertHigh.conditionType = conditionType.lowerOrEqual;
    b_idp_alertHigh.threshold = 10;
    b_idp_alertHigh.minimumDurationSeconds = 120;
    b_idp_alertHigh.normalConditionType = conditionType.greater;
    b_idp_alertHigh.normalThreshold = 10;
    b_idp_alertHigh.severity = alarmSeverity.high;
    b_idp_alertHigh.notificationEmails = mailsSeverityHigh;
    b_idp_alertHigh.emailTemplates = alertsMailHighTemplates;

    let cb_alertMedium = cb.addAlert();
    cb_alertMedium.variableTypeId = variableType.voltage;
    cb_alertMedium.conditionType = conditionType.lowerOrEqual;
    cb_alertMedium.threshold = 11;
    cb_alertMedium.normalConditionType = conditionType.greater;
    cb_alertMedium.normalThreshold = 11;
    cb_alertMedium.severity = alarmSeverity.medium;
    cb_alertMedium.notificationEmails = mailsSeverityMedium;
    cb_alertMedium.emailTemplates = alertsMailMediumTemplates;

    let cb_alertHigh = cb.addAlert();
    cb_alertHigh.variableTypeId = variableType.voltage;
    cb_alertHigh.conditionType = conditionType.lowerOrEqual;
    cb_alertHigh.threshold = 10;
    cb_alertHigh.minimumDurationSeconds = 120;
    cb_alertHigh.normalConditionType = conditionType.greater;
    cb_alertHigh.normalThreshold = 10;
    cb_alertHigh.severity = alarmSeverity.high;
    cb_alertHigh.notificationEmails = mailsSeverityHigh;
    cb_alertHigh.emailTemplates = alertsMailHighTemplates;


    let alert_firmware_changed_0 = e_firmware_changed.addAlert();

    alert_firmware_changed_0.variableTypeId = 1437;
    alert_firmware_changed_0.conditionType = conditionType.equal;
    alert_firmware_changed_0.threshold = 0;
    alert_firmware_changed_0.normalConditionType = conditionType.notEqual;
    alert_firmware_changed_0.normalThreshold = 0;
    alert_firmware_changed_0.severity = 1;
    alert_firmware_changed_0.notificationEmails = mailsSeverityInformation;
    alert_firmware_changed_0.emailTemplates = alertsMailInformationTemplates;

    let alert_last_action_alarms_0 = e_last_action_alarms.addAlert();

    alert_last_action_alarms_0.variableTypeId = 1436;
    alert_last_action_alarms_0.conditionType = conditionType.equal;
    alert_last_action_alarms_0.threshold = 1;
    alert_last_action_alarms_0.normalConditionType = conditionType.notEqual;
    alert_last_action_alarms_0.normalThreshold = 1;
    alert_last_action_alarms_0.severity = 0;
    alert_last_action_alarms_0.notificationEmails = mailsSeverityInformation;
    alert_last_action_alarms_0.emailTemplates = alertsMailInformationTemplates;

    let alert_last_action_alarms_1 = e_last_action_alarms.addAlert();

    alert_last_action_alarms_1.variableTypeId = 1436;
    alert_last_action_alarms_1.conditionType = conditionType.equal;
    alert_last_action_alarms_1.threshold = 2;
    alert_last_action_alarms_1.normalConditionType = conditionType.notEqual;
    alert_last_action_alarms_1.normalThreshold = 2;
    alert_last_action_alarms_1.severity = 0;
    alert_last_action_alarms_1.notificationEmails = mailsSeverityInformation;
    alert_last_action_alarms_1.emailTemplates = alertsMailInformationTemplates;

    let alert_last_action_alarms_2 = e_last_action_alarms.addAlert();

    alert_last_action_alarms_2.variableTypeId = 1436;
    alert_last_action_alarms_2.conditionType = conditionType.equal;
    alert_last_action_alarms_2.threshold = 3;
    alert_last_action_alarms_2.normalConditionType = conditionType.notEqual;
    alert_last_action_alarms_2.normalThreshold = 3;
    alert_last_action_alarms_2.severity = 0;
    alert_last_action_alarms_2.notificationEmails = mailsSeverityInformation;
    alert_last_action_alarms_2.emailTemplates = alertsMailInformationTemplates;

    let alert_last_action_alarms_3 = e_last_action_alarms.addAlert();

    alert_last_action_alarms_3.variableTypeId = 1436;
    alert_last_action_alarms_3.conditionType = conditionType.equal;
    alert_last_action_alarms_3.threshold = 4;
    alert_last_action_alarms_3.normalConditionType = conditionType.notEqual;
    alert_last_action_alarms_3.normalThreshold = 4;
    alert_last_action_alarms_3.severity = 0;
    alert_last_action_alarms_3.notificationEmails = mailsSeverityInformation;
    alert_last_action_alarms_3.emailTemplates = alertsMailInformationTemplates;

    let alert_last_action_alarms_4 = e_last_action_alarms.addAlert();

    alert_last_action_alarms_4.variableTypeId = 1436;
    alert_last_action_alarms_4.conditionType = conditionType.equal;
    alert_last_action_alarms_4.threshold = 5;
    alert_last_action_alarms_4.normalConditionType = conditionType.notEqual;
    alert_last_action_alarms_4.normalThreshold = 5;
    alert_last_action_alarms_4.severity = 0;
    alert_last_action_alarms_4.notificationEmails = mailsSeverityInformation;
    alert_last_action_alarms_4.emailTemplates = alertsMailInformationTemplates;

    let alert_last_action_alarms_5 = e_last_action_alarms.addAlert();

    alert_last_action_alarms_5.variableTypeId = 1436;
    alert_last_action_alarms_5.conditionType = conditionType.equal;
    alert_last_action_alarms_5.threshold = 6;
    alert_last_action_alarms_5.normalConditionType = conditionType.notEqual;
    alert_last_action_alarms_5.normalThreshold = 6;
    alert_last_action_alarms_5.severity = 0;
    alert_last_action_alarms_5.notificationEmails = mailsSeverityInformation;
    alert_last_action_alarms_5.emailTemplates = alertsMailInformationTemplates;

    let alert_last_action_alarms_6 = e_last_action_alarms.addAlert();

    alert_last_action_alarms_6.variableTypeId = 1436;
    alert_last_action_alarms_6.conditionType = conditionType.equal;
    alert_last_action_alarms_6.threshold = 7;
    alert_last_action_alarms_6.normalConditionType = conditionType.notEqual;
    alert_last_action_alarms_6.normalThreshold = 7;
    alert_last_action_alarms_6.severity = 0;
    alert_last_action_alarms_6.notificationEmails = mailsSeverityInformation;
    alert_last_action_alarms_6.emailTemplates = alertsMailInformationTemplates;

    let alert_last_action_alarms_7 = e_last_action_alarms.addAlert();

    alert_last_action_alarms_7.variableTypeId = 1436;
    alert_last_action_alarms_7.conditionType = conditionType.equal;
    alert_last_action_alarms_7.threshold = 8;
    alert_last_action_alarms_7.normalConditionType = conditionType.notEqual;
    alert_last_action_alarms_7.normalThreshold = 8;
    alert_last_action_alarms_7.severity = 0;
    alert_last_action_alarms_7.notificationEmails = mailsSeverityInformation;
    alert_last_action_alarms_7.emailTemplates = alertsMailInformationTemplates;

    let alert_last_action_alarms_8 = e_last_action_alarms.addAlert();

    alert_last_action_alarms_8.variableTypeId = 1436;
    alert_last_action_alarms_8.conditionType = conditionType.equal;
    alert_last_action_alarms_8.threshold = 9;
    alert_last_action_alarms_8.normalConditionType = conditionType.notEqual;
    alert_last_action_alarms_8.normalThreshold = 9;
    alert_last_action_alarms_8.severity = 0;
    alert_last_action_alarms_8.notificationEmails = mailsSeverityInformation;
    alert_last_action_alarms_8.emailTemplates = alertsMailInformationTemplates;

    let alert_last_action_alarms_9 = e_last_action_alarms.addAlert();

    alert_last_action_alarms_9.variableTypeId = 1436;
    alert_last_action_alarms_9.conditionType = conditionType.equal;
    alert_last_action_alarms_9.threshold = 10;
    alert_last_action_alarms_9.normalConditionType = conditionType.notEqual;
    alert_last_action_alarms_9.normalThreshold = 10;
    alert_last_action_alarms_9.severity = 0;
    alert_last_action_alarms_9.notificationEmails = mailsSeverityInformation;
    alert_last_action_alarms_9.emailTemplates = alertsMailInformationTemplates;

    let alert_last_action_alarms_10 = e_last_action_alarms.addAlert();

    alert_last_action_alarms_10.variableTypeId = 1436;
    alert_last_action_alarms_10.conditionType = conditionType.equal;
    alert_last_action_alarms_10.threshold = 11;
    alert_last_action_alarms_10.normalConditionType = conditionType.notEqual;
    alert_last_action_alarms_10.normalThreshold = 11;
    alert_last_action_alarms_10.severity = 0;
    alert_last_action_alarms_10.notificationEmails = mailsSeverityInformation;
    alert_last_action_alarms_10.emailTemplates = alertsMailInformationTemplates;

    let alert_last_action_alarms_11 = e_last_action_alarms.addAlert();

    alert_last_action_alarms_11.variableTypeId = 1436;
    alert_last_action_alarms_11.conditionType = conditionType.equal;
    alert_last_action_alarms_11.threshold = 12;
    alert_last_action_alarms_11.normalConditionType = conditionType.notEqual;
    alert_last_action_alarms_11.normalThreshold = 12;
    alert_last_action_alarms_11.severity = 0;
    alert_last_action_alarms_11.notificationEmails = mailsSeverityInformation;
    alert_last_action_alarms_11.emailTemplates = alertsMailInformationTemplates;


    let alert_vc_anomalies_1 = vc_anomalies.addAlert();

    alert_vc_anomalies_1.variableTypeId = 1529;
    alert_vc_anomalies_1.conditionType = conditionType.equal;
    alert_vc_anomalies_1.threshold = 1;
    alert_vc_anomalies_1.normalConditionType = conditionType.notEqual;
    alert_vc_anomalies_1.normalThreshold = 1;
    alert_vc_anomalies_1.minimumDurationSeconds = 2100;
    alert_vc_anomalies_1.severity = 0;
    alert_vc_anomalies_1.notificationEmails = [
        "@ab:10", "@ab:50"
    ];
    alert_vc_anomalies_1.emailTemplates = alertsMailInformationTemplates;

    let alert_vc_anomalies_2 = vc_anomalies.addAlert();

    alert_vc_anomalies_2.variableTypeId = 1529;
    alert_vc_anomalies_2.conditionType = conditionType.equal;
    alert_vc_anomalies_2.threshold = 2;
    alert_vc_anomalies_2.normalConditionType = conditionType.notEqual;
    alert_vc_anomalies_2.normalThreshold = 2;
    alert_vc_anomalies_2.minimumDurationSeconds = 2100;
    alert_vc_anomalies_2.severity = 0;
    alert_vc_anomalies_2.notificationEmails = [
        "@ab:10", "@ab:50"
    ];
    alert_vc_anomalies_2.emailTemplates = alertsMailInformationTemplates;

    let alert_vc_anomalies_3 = vc_anomalies.addAlert();

    alert_vc_anomalies_3.variableTypeId = 1529;
    alert_vc_anomalies_3.conditionType = conditionType.equal;
    alert_vc_anomalies_3.threshold = 3;
    alert_vc_anomalies_3.normalConditionType = conditionType.notEqual;
    alert_vc_anomalies_3.normalThreshold = 3;
    alert_vc_anomalies_3.minimumDurationSeconds = 2100;
    alert_vc_anomalies_3.severity = 0;
    alert_vc_anomalies_3.notificationEmails = [
        "@ab:10", "@ab:50"
    ];
    alert_vc_anomalies_3.emailTemplates = alertsMailInformationTemplates;

    let alert_vc_anomalies_4 = vc_anomalies.addAlert();

    alert_vc_anomalies_4.variableTypeId = 1529;
    alert_vc_anomalies_4.conditionType = conditionType.equal;
    alert_vc_anomalies_4.threshold = 4;
    alert_vc_anomalies_4.normalConditionType = conditionType.notEqual;
    alert_vc_anomalies_4.normalThreshold = 4;
    alert_vc_anomalies_4.minimumDurationSeconds = 2100;
    alert_vc_anomalies_4.severity = 0;
    alert_vc_anomalies_4.notificationEmails = [
        "@ab:10", "@ab:50"
    ];
    alert_vc_anomalies_4.emailTemplates = alertsMailInformationTemplates;

    let alert_vc_anomalies_5 = vc_anomalies.addAlert();

    alert_vc_anomalies_5.variableTypeId = 1529;
    alert_vc_anomalies_5.conditionType = conditionType.equal;
    alert_vc_anomalies_5.threshold = 5;
    alert_vc_anomalies_5.normalConditionType = conditionType.notEqual;
    alert_vc_anomalies_5.normalThreshold = 5;
    alert_vc_anomalies_5.minimumDurationSeconds = 2100;
    alert_vc_anomalies_5.severity = 0;
    alert_vc_anomalies_5.notificationEmails = [
        "@ab:10", "@ab:50"
    ];
    alert_vc_anomalies_5.emailTemplates = alertsMailInformationTemplates;

    let alert_vc_anomalies_6 = vc_anomalies.addAlert();

    alert_vc_anomalies_6.variableTypeId = 1529;
    alert_vc_anomalies_6.conditionType = conditionType.equal;
    alert_vc_anomalies_6.threshold = 6;
    alert_vc_anomalies_6.normalConditionType = conditionType.notEqual;
    alert_vc_anomalies_6.normalThreshold = 6;
    alert_vc_anomalies_6.minimumDurationSeconds = 2100;
    alert_vc_anomalies_6.severity = 0;
    alert_vc_anomalies_6.notificationEmails = [
        "@ab:10", "@ab:50"
    ];
    alert_vc_anomalies_6.emailTemplates = alertsMailInformationTemplates;

}

function validateDeviceAddress(address, result) { }

function updateDeviceUIRules(device, rules) {
    rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules) {
    rules.canDelete = true;
    // rules.canEditSubType = (endpoint.address == "2");
}
