function hnModule (name, def) {
	if(!this._modList){
		this._modList = {};
	}

	if(this._modList[name] && !def){
		return this._modList[name];
	}

	if(!this._modList[name] && !def){
		throw 'Error: module "' + name + '" is not defined.'
	}

	if(!this._modList[name] && def){
		this._modList[name] = def;
	}
}