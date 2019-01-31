/* global bp */
importPackage(Packages.com.mxgraph.model);

function SubmissionAddedAll() {
	return bp.EventSet( "SubmissionAddedAll", function(ev){
		  var e = JSON.parse(ev.name);
		  return e.name == "SubmissionAdded";
		});
}

function SubmissionAdded(id) {
	return bp.EventSet( "SubmissionAddedAll", function(ev){
		  var e = JSON.parse(ev.name);
		  return e.name == "SubmissionAdded" && e.courseId == id;
		});
}


function goToFollowers(c, contxt, ths, bp) {

	var edg = mxGraphModel.getEdges(model, c, false, true, true);

	if (contxt.forward != undefined) {
		edg=edg.filter(n =>  Object.keys(contxt.forward).indexOf(""+n.getAttribute("name"))!== -1);
	}

	
	if (edg.length > 0) {
		// Run extra followers in new threads
		for (var i = 1; i < edg.length; i++) {
			if(edg[i].getTarget() != undefined) {
				var ctx = ((contxt.forward == undefined) ? contxt : contxt.forward[edg[i].getAttribute("name")]);
				ctx.forward = undefined;
			
				runInNewBT(edg[i].getTarget(), ctx );
			}
		}	
		
		// Run the first follower in the same thread.
		if(edg[0].getTarget() != undefined) {
			var ctx = ((contxt.forward == undefined) ? contxt : contxt.forward[edg[0].getAttribute("name")]);
			ctx.forward = undefined;
			
			runInSameBT(edg[0].getTarget(), ctx, ths, bp);
		}
	}
}

function runInNewBT(c, ctx) {
	// Cloning - Is this the right way?
	var contxt = JSON.parse(JSON.stringify(ctx));

	bp.registerBThread(c.getId(), function() {
		eval("var f=f" + c.getId());
		
		f(contxt, this, bp);

		goToFollowers(c, contxt, this, bp);
	});
};

function runInSameBT(c, contxt, ths, bp) {
	eval("var f=f" + c.getId());
	
	f(contxt, ths, bp);

	goToFollowers(c, contxt, ths, bp);
};


// Start the context nodes
var nds = mxGraphModel.filterCells(model.getCells().values().toArray(),
		function(cell) {
			return cell.getAttribute("type") == "context";
		});

for ( var c in nds) {
	runInNewBT(nds[c], {});
}
