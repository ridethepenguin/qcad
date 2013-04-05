/**
 * Copyright (c) 2011-2013 by Andrew Mustun. All rights reserved.
 * 
 * This file is part of the QCAD project.
 *
 * QCAD is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * QCAD is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with QCAD.
 */
// Auto generated by Testing Dashboard
// File        : scripts/Projection/IsometricProjection/IsoProject/Tests/IsoProjectTest03.js
// Timestamp   : 2011-08-05 13:56:04
// Description : isometric projection of an arc using different segment lengths

include('scripts/Pro/Developer/TestingDashboard/TdbTest.js');

function IsoProjectTest03() {
    TdbTest.call(this, 'scripts/Projection/IsometricProjection/IsoProject/Tests/IsoProjectTest03.js');
}

IsoProjectTest03.prototype = new TdbTest();

IsoProjectTest03.prototype.test00 = function() {
    qDebug('running IsoProjectTest03.test00()...');
    this.setUp();
    this.importFile('scripts/Projection/IsometricProjection/IsoProject/Tests/data/cube_arc.dxf');
    this.setZoom(6.914994309623345, new RVector(1.69613, 14.7619, 0) );
    var p = new RVector(5, 15);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(1, 19);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    // key: 'P'
    this.pressAndReleaseKeyOnGv(0x50, 0);
    // key: 'J'
    this.pressAndReleaseKeyOnGv(0x4a, 0);
    this.setToolOption('IsoProject/ProjectionType', 'Top');
    this.setToolOption('IsoProject/SegmentLength',  [ 5, 0 ] );
    this.updateToolOptions();
    this.setZoom(6.914994309623345, new RVector(1.69613, 14.7619, 0) );
    var p = new RVector(9.43909, 19.80065);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(6.914994309623345, new RVector(1.69613, 14.7619, 0) );
    var p = new RVector(56.293792, 28.18822);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setToolOption('IsoProject/ProjectionType', 'Right');
    this.setToolOption('IsoProject/SegmentLength',  [ 8, 0 ] );
    this.updateToolOptions();
    this.setZoom(6.914994309623345, new RVector(1.69613, 14.7619, 0) );
    var p = new RVector(57.161472, 20.23449);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setToolOption('IsoProject/ProjectionType', 'Left');
    this.setToolOption('IsoProject/SegmentLength',  [ 10, 0 ] );
    this.updateToolOptions();
    this.setZoom(6.914994309623345, new RVector(1.69613, 14.7619, 0) );
    var p = new RVector(43.133984, 19.656037);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(25.635777, 31.080486);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(28.094203, 30.212806);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.verifyDrawing('IsoProjectTest03_000.dxf');
    this.tearDown();
    qDebug('finished IsoProjectTest03.test00()');
};

