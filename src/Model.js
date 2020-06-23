import React, {useState, useEffect} from 'react';
import './Model.css';

const Autodesk = window.Autodesk;
const THREE = window.THREE;

export const Model = ({urn, token}) => {
  const viewerApp = new Autodesk.Viewing.ViewingApplication('MyViewerDiv');
  const [selectedId, setSelectedId] = useState('Select element');

  function onDocumentLoadSuccess(doc) {
        var viewables = viewerApp.bubble.search({'type':'geometry'});
        if (viewables.length === 0) {
            return;
        }
        viewerApp.selectItem(viewables[1].data, onItemLoadSuccess, onItemLoadFail);
    }
    
    function onDocumentLoadFailure(viewerErrorCode) {
        alert('Error onDocumentLoadFailure', viewerErrorCode);
    }
    
    function onItemLoadSuccess(viewer, item) {
      let zoom = 1;
      if(urn === 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YWpiYWRiYXNuZGJhbXNkbmFfL2RldGFpbC5kd2c') {
        zoom = 10000;
      }
      /* change zoom */
      const nav = viewer.navigation;
      const pos = nav.getPosition();
      const target = nav.getTarget();
      var viewdir = new THREE.Vector3();
      viewdir.subVectors(pos, target).normalize();
      viewdir.multiplyScalar(zoom);
      pos.add(viewdir);
      nav.setPosition(pos);
      /* change zoom */

      viewer.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, (e) => {
          if(e.dbIdArray[0]) {
              setSelectedId(`Selected ID is ${e.dbIdArray[0]}`);
          } else {
              setSelectedId('Select element');
          }
          
      })
    }
    
    function onItemLoadFail(errorCode) {
      alert('Error onItemLoadFail', errorCode);
    }

  const options = {
    env: 'AutodeskProduction',
    getAccessToken: function(onGetAccessToken) {
      const accessToken = token;
      const expireTimeSeconds = 3600;
      onGetAccessToken(accessToken, expireTimeSeconds);
    }
  };

  const config3d = {
    extensions: []
  };

  useEffect(() => {
    Autodesk.Viewing.Initializer(options, function onInitialized() {
      viewerApp.registerViewer(viewerApp.k3D, Autodesk.Viewing.Viewer3D, config3d);
      viewerApp.loadDocument(urn, onDocumentLoadSuccess, onDocumentLoadFailure);            
    });
  }, []);



  return (
    <div className="wrapper">
      <div id="selectedId">{selectedId}</div>
      <div id="MyViewerDiv"></div>
    </div>
  )
}
